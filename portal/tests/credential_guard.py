#!/usr/bin/env python3
"""Index credential check. Reports paths/categories, never credential values.
Run from a repository: python3 portal/tests/credential_guard.py
Scan every tracked index file (for CI): add --tracked
Run its synthetic tests: python3 portal/tests/credential_guard.py --self-test
This complements provider secret scanning; it cannot certify absence of secrets.
"""
import base64
import json
import re
import subprocess
import sys
from pathlib import PurePosixPath

PATTERNS = {
    'Supabase secret': rb'sb_secret_[A-Za-z0-9_-]{10,}',
    'GitHub token': rb'gh[pousr]_[A-Za-z0-9]{30,}|github_pat_[A-Za-z0-9_]{30,}',
    'AWS access key': rb'(?:AKIA|ASIA)[A-Z0-9]{16}',
    'private key': rb'-----BEGIN (?:RSA |EC |OPENSSH |DSA |ENCRYPTED )?PRIVATE KEY-----',
    'Stripe secret': rb'sk_live_[A-Za-z0-9]{16,}',
    'OpenAI secret': rb'sk-(?:proj-|svcacct-)?[A-Za-z0-9_-]{32,}',
    'Google API key': rb'AIza[0-9A-Za-z_-]{35}',
    'database credentials': rb'(?:postgres(?:ql)?|mysql|mongodb(?:\+srv)?)://[^\s\x00"\x27<>]+:[^\s\x00"\x27<>]+@',
}

def findings(path, data):
    results=[]
    name=PurePosixPath(path).name.lower()
    if (name=='.env' or name.startswith('.env.')) and name not in ('.env.example','.env.sample','.env.template'):
        results.append('environment file')
    if name.endswith(('.pem','.key','.p12','.pfx')):
        results.append('private-key container candidate')
    for label,pattern in PATTERNS.items():
        if re.search(pattern,data):results.append(label)
    for token in re.findall(rb'eyJ[A-Za-z0-9_-]{8,}\.[A-Za-z0-9_-]{8,}\.[A-Za-z0-9_-]{8,}',data):
        try:
            part=token.split(b'.')[1]
            payload=json.loads(base64.urlsafe_b64decode(part+b'='*((-len(part))%4)))
            if payload.get('role')=='service_role':results.append('Supabase service-role JWT')
        except (ValueError,TypeError):pass
    return sorted(set(results))

def self_test():
    assert findings('.env',b'anything')==['environment file']
    assert findings('server.pem',b'anything')==['private-key container candidate']
    for label,value in [('Supabase secret',b'sb_'+b'secret_'+b'x'*24),('GitHub token',b'gh'+b'p_'+b'x'*40),('private key',b'-----BEGIN '+b'PRIVATE KEY-----'),('database credentials',b'postgres'+b'://user:sample@localhost/test')]:
        assert label in findings('test.txt',value)
    part=base64.urlsafe_b64encode(json.dumps({'role':'service_role'}).encode()).rstrip(b'=')
    assert 'Supabase service-role JWT' in findings('test.txt',b'eyJaaaaaaaaa.'+part+b'.aaaaaaaaaa')
    assert not findings('.env.example',b'URL=replace-me')
    assert not findings('portal/config.js',b'publishableKey: ""')
    print('9 synthetic credential-guard checks passed.')

if __name__=='__main__':
    if '--self-test' in sys.argv:self_test();sys.exit(0)
    root=subprocess.check_output(['git','rev-parse','--show-toplevel']).decode().strip()
    tracked='--tracked' in sys.argv
    command=['git','ls-files','-z'] if tracked else ['git','diff','--cached','--name-only','--diff-filter=ACMR','-z']
    paths=subprocess.check_output(command,cwd=root).decode().split('\0')
    blocked=False
    for path in filter(None,paths):
        data=subprocess.check_output(['git','show',':'+path],cwd=root)
        for label in findings(path,data):
            print(f'BLOCKED: {path} — {label}',file=sys.stderr);blocked=True
    if blocked:
        print('Commit blocked. Remove the sensitive file/value; privately review whether an exposed credential needs rotation.',file=sys.stderr)
        sys.exit(1)
    print(('Tracked index' if tracked else 'Staged')+' credential-pattern check passed (not a complete security audit).')
