// Browser roles control presentation only. Database grants, RLS and triggers authorize writes.
import { validConfig, safePreview } from './validation.js';
import { createMfaGate } from './mfa.js';
import { createReviewFiles } from './reviews.js';
import { createPrivateStorageFetch } from './storage-fetch.js';
const $ = id => document.getElementById(id);
const node = (tag, value) => { const e = document.createElement(tag); if (value !== undefined) e.textContent = String(value); return e; };
const notice = message => { $('notice').textContent = message; };
const cfg = window.OBANIMI_PORTAL_CONFIG || {};
let mfa, reviews;
const clearPrivate = () => { mfa?.clear(); reviews?.clear(); $('projects').replaceChildren(); $('admin').replaceChildren(); $('dashboard').hidden = true; };
if (window.self !== window.top) {
  notice('Open this portal directly in your browser to sign in.');
} else if (!validConfig(cfg)) {
  notice('Setup pending. No client information is available.');
} else {
  import('./vendor/supabase.js').then(async ({ createClient }) => {
    const db = createClient(cfg.url, cfg.publishableKey, { global: {
      fetch: createPrivateStorageFetch(cfg.url)
    }, auth: {
      flowType: 'pkce', detectSessionInUrl: true, persistSession: true,
      // Tokens stay per-tab. Only the one-time PKCE verifier is shared so
      // an email link opened in another tab can complete authentication.
      storage: {
        getItem: key => (key.endsWith('-code-verifier') ? window.localStorage : window.sessionStorage).getItem(key),
        setItem: (key, value) => (key.endsWith('-code-verifier') ? window.localStorage : window.sessionStorage).setItem(key, value),
        removeItem: key => (key.endsWith('-code-verifier') ? window.localStorage : window.sessionStorage).removeItem(key)
      }, storageKey: 'obanimi-portal-auth'
    }});
    let epoch = 0;
    reviews = createReviewFiles(db, { notice });
    mfa = createMfaGate(db, { container: $('mfa'), notice, onVerified: () => refresh() });
    const field = (form, label, type = 'input', value = '') => {
      const wrap = node('label', label), input = node(type); input.value = value; wrap.append(input); form.append(wrap); return input;
    };
    const run = async (button, action, message) => {
      const ticket = epoch; button.disabled = true;
      try {
        const result = await action();
        if (ticket !== epoch) return;
        if (result.error) { notice('The change was not saved. Refresh and try again, or contact ObanimiStudio.'); return; }
        notice(message); await refresh();
      } catch { if (ticket === epoch) notice('Connection unavailable. The change could not be confirmed.'); }
      finally { button.disabled = false; }
    };
    function projectForm(parent, project, save) {
      const form = node('form');
      const title = field(form, 'Project title', 'input', project?.title || ''); title.required = true; title.maxLength = 160;
      const summary = field(form, 'Project summary', 'textarea', project?.summary || ''); summary.maxLength = 5000;
      const status = field(form, 'Status', 'select');
      for (const value of ['planning', 'in_progress', 'review', 'completed', 'on_hold']) { const option = node('option', value.replaceAll('_', ' ')); option.value = value; status.append(option); }
      status.value = project?.status || 'planning';
      const progress = field(form, 'Progress (%)', 'input', String(project?.progress || 0)); progress.type = 'number'; progress.min = 0; progress.max = 100; progress.step = 1; progress.required = true;
      const preview = field(form, 'HTTPS preview URL (optional)', 'input', project?.preview_url || ''); preview.type = 'url'; preview.maxLength = 2048;
      form.append(node('p', 'Website links have their own access settings. Use private review files below for confidential PDFs and images.'));
      const button = node('button', project ? 'Save project' : 'Create project'); form.append(button);
      form.addEventListener('submit', e => {
        e.preventDefault(); const url = preview.value.trim();
        if (!title.value.trim() || (url && !safePreview(url))) { notice('Use a title and an HTTPS URL without embedded credentials.'); return; }
        const values = { title: title.value.trim(), summary: summary.value.trim(), status: status.value, progress: Number(progress.value), preview_url: url || null };
        run(button, () => save(values), project ? 'Project updated.' : 'Project created.');
      });
      parent.append(form);
    }
    async function refresh() {
      const ticket = ++epoch; clearPrivate();
      const current = () => ticket === epoch;
      const auth = await db.auth.getUser(); if (!current()) return;
      const user = auth.error ? null : auth.data.user;
      $('login').hidden = !!user; $('logout').hidden = !user;
      if (!user) { mfa.reset(); notice('Sign in using your invited email address.'); return; }
      // Remove callback parameters only after the SDK has verified the session.
      if (location.search || location.hash) history.replaceState(null, '', location.pathname);
      const member = await db.from('portal_members').select('role,display_name').eq('user_id', user.id).maybeSingle();
      if (!current()) return;
      if (member.error || !member.data) { notice('This account is not authorised. Contact ObanimiStudio.'); return; }
      const isAdmin = member.data.role === 'admin';
      if (isAdmin && await mfa.required(user.id, current)) return;
      if (!current()) return;
      const results = await Promise.all([
        db.from('client_projects').select('id,title,summary,status,progress,preview_url,revision,updated_at').order('updated_at', { ascending: false }),
        isAdmin ? db.from('portal_members').select('user_id,display_name,role').eq('role', 'client').order('display_name') : Promise.resolve({ data: [] }),
        isAdmin ? db.from('project_members').select('project_id,user_id') : Promise.resolve({ data: [] })
      ]);
      if (!current()) return;
      if (results.some(r => r.error)) { notice('Unable to load projects. Please retry.'); return; }
      const [projects, clients, assignments] = results.map(r => r.data);
      $('heading').textContent = isAdmin ? 'Administrator · Project management' : 'Your projects';
      $('dashboard').hidden = false;
      if (isAdmin) {
        const create = node('details'); create.append(node('summary', 'Create a project')); projectForm(create, null, values => db.from('client_projects').insert(values)); $('admin').append(create);
        const add = node('details'); add.append(node('summary', 'Register an invited client'));
        add.append(node('p', 'First invite this person privately in Supabase. Register their verified Auth user ID here. This does not send an invitation.'));
        const form = node('form'), name = field(form, 'Client display name'), uuid = field(form, 'Verified Auth user ID'); name.maxLength = 160; name.required = true; uuid.required = true;
        const button = node('button', 'Register client'); form.append(button); add.append(form); $('admin').append(add);
        form.addEventListener('submit', e => {
          e.preventDefault(); if (!/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(uuid.value.trim())) { notice('Enter the verified Auth user ID.'); return; }
          run(button, () => db.from('portal_members').insert({ user_id: uuid.value.trim(), display_name: name.value.trim(), role: 'client' }), 'Client registered.');
        });
      }
      notice(projects.length ? 'Projects loaded.' : 'No projects assigned yet.');
      for (const project of projects) {
        if (!current()) return;
        const card = node('article'); card.className = 'card';
        card.append(node('h3', project.title), node('p', project.summary), node('p', `${project.status.replaceAll('_', ' ')} · ${project.progress}% · Version ${project.revision}`));
        const progress = node('progress'); progress.max = 100; progress.value = project.progress; progress.setAttribute('aria-label', 'Project progress'); card.append(progress);
        const url = safePreview(project.preview_url); if (url) { const a = node('a', 'Open website preview ↗'); a.href = url; a.target = '_blank'; a.rel = 'noopener noreferrer'; card.append(a,node('p','This website link has separate access settings.')); }
        await reviews.render(card, project, isAdmin, current, refresh);
        if (!current()) return;
        const activity = node('div'); activity.className = 'activity'; card.append(node('h4', 'Feedback and decisions'), activity);
        const [feedback, approvals] = await Promise.all([
          db.from('project_feedback').select('message,created_at').eq('project_id', project.id).order('created_at', { ascending: false }).limit(20),
          db.from('project_approvals').select('decision,note,revision,created_at').eq('project_id', project.id).order('created_at', { ascending: false }).limit(20)
        ]);
        if (!current()) return;
        if (feedback.error || approvals.error) activity.append(node('p', 'Activity could not be loaded.'));
        else {
          for (const item of feedback.data) activity.append(node('p', `Feedback · ${item.message}`));
          for (const item of approvals.data) activity.append(node('p', `Version ${item.revision}${item.revision !== project.revision ? ' (previous)' : ''} · ${item.decision.replaceAll('_', ' ')} · ${item.note}`));
        }
        const form = node('form'), input = field(form, 'Feedback', 'textarea'); input.required = true; input.maxLength = 3000;
        const send = node('button', 'Send feedback'); form.append(send); card.append(form);
        form.addEventListener('submit', e => { e.preventDefault(); const message = input.value.trim(); if (message) run(send, () => db.from('project_feedback').insert({ project_id: project.id, author_id: user.id, message }), 'Feedback saved.'); });
        if (!isAdmin && project.status === 'review') {
          for (const [decision, label] of [['approved', 'Approve this version'], ['changes_requested', 'Request changes']]) {
            const button = node('button', label); button.type = 'button'; card.append(button);
            button.addEventListener('click', () => {
              const note = window.prompt(decision === 'approved' ? `Confirm approval of version ${project.revision}. Optional note:` : 'Describe the changes requested');
              if (note === null || note.length > 3000 || (decision === 'changes_requested' && !note.trim())) return;
              run(button, () => db.from('project_approvals').insert({ project_id: project.id, author_id: user.id, revision: project.revision, decision, note: note.trim() }), 'Decision recorded.');
            });
          }
        }
        if (isAdmin) {
          const editor = node('details'); editor.append(node('summary', 'Manage project'));
          // Optimistic concurrency: a stale admin editor cannot overwrite a newer revision.
          projectForm(editor, project, values => db.from('client_projects').update(values).eq('id', project.id).eq('revision', project.revision).select('id').single());
          editor.append(node('h4', 'Client access'));
          for (const client of clients) {
            const assigned = assignments.some(a => a.project_id === project.id && a.user_id === client.user_id);
            const row = node('p', client.display_name || 'Unnamed client'), button = node('button', assigned ? 'Remove access' : 'Grant access'); button.type = 'button'; row.append(button); editor.append(row);
            button.addEventListener('click', () => {
              if (!window.confirm(`${assigned ? 'Remove' : 'Grant'} ${client.display_name || 'this client'} access to ${project.title}?`)) return;
              run(button, () => assigned ? db.from('project_members').delete().eq('project_id', project.id).eq('user_id', client.user_id) : db.from('project_members').insert({ project_id: project.id, user_id: client.user_id }), 'Client access updated.');
            });
          }
          card.append(editor);
        }
        $('projects').append(card);
      }
    }
    $('login-form').addEventListener('submit', async e => {
      e.preventDefault(); const button = e.currentTarget.querySelector('button'); button.disabled = true;
      try {
        const result = await db.auth.signInWithOtp({ email: $('email').value.trim(), options: { shouldCreateUser: false, emailRedirectTo: cfg.redirectUrl } });
        if (result.error) throw result.error;
        notice('If this email is invited and delivery succeeds, a sign-in link will arrive shortly.');
      } catch { notice('Unable to request a sign-in link. Please try again.'); }
      finally { button.disabled = false; }
    });
    $('logout').addEventListener('click', async () => {
      ++epoch; clearPrivate(); mfa.reset(); $('logout').disabled = true;
      try { const result = await db.auth.signOut({ scope: 'local' }); if (result.error) throw result.error; await refresh(); }
      catch { notice('Sign-out could not be confirmed. Close this tab and retry before leaving a shared device.'); }
      finally { $('logout').disabled = false; }
    });
    db.auth.onAuthStateChange(() => {
      ++epoch; clearPrivate();
      setTimeout(() => refresh().catch(() => { clearPrivate(); notice('Unable to refresh session.'); }), 0);
    });
    await refresh();
  }).catch(() => { clearPrivate(); notice('Portal unavailable. Please contact ObanimiStudio.'); });
}
