// MFA presentation only; migrations/001_admin_mfa.sql enforces access in PostgreSQL.
export function createMfaGate(db, { container, notice, onVerified }) {
  let pending = null, owner = null;
  const element = (tag, text) => { const el = document.createElement(tag); if (text) el.textContent = text; return el; };
  const clear = () => { container.replaceChildren(); container.hidden = true; };
  return {
    clear,
    reset() { pending = null; owner = null; clear(); },
    async required(userId, current) {
      if (owner !== userId) { pending = null; owner = userId; }
      const level = await db.auth.mfa.getAuthenticatorAssuranceLevel();
      if (!current()) return true;
      if (level.error) throw new Error('MFA session check failed');
      if (level.data.currentLevel === 'aal2') { pending = null; clear(); return false; }
      const factors = await db.auth.mfa.listFactors();
      if (!current()) return true;
      if (factors.error) throw new Error('MFA factors unavailable');
      clear(); container.hidden = false;
      container.append(element('h2', 'Administrator verification'));
      container.append(element('p', 'Your portal login has its own authenticator setup, separate from your Supabase dashboard account. Keep this QR and all codes private.'));
      const verified = factors.data.totp.filter(f => f.status === 'verified');
      const form = element('form');
      let factorId = pending?.id;
      if (verified.length) {
        const label = element('label', 'Authenticator'), select = element('select');
        for (const factor of verified) { const option = element('option', factor.friendly_name || 'Authenticator'); option.value = factor.id; select.append(option); }
        factorId = select.value; select.addEventListener('change', () => { factorId = select.value; }); label.append(select); form.append(label);
      } else {
        if (!pending) {
          const setup = element('button', 'Set up portal authenticator'); setup.type = 'button'; container.append(setup);
          setup.addEventListener('click', async () => {
            setup.disabled = true;
            try {
              const result = await db.auth.mfa.enroll({ factorType: 'totp', friendlyName: 'ObanimiStudio portal administrator' });
              if (!current()) return;
              if (result.error) { notice('Authenticator setup could not start. Retry or contact ObanimiStudio.'); return; }
              pending = { id: result.data.id, ...result.data.totp };
              await this.required(userId, current);
            } catch { if (current()) notice('Authenticator setup could not be confirmed.'); }
            finally { setup.disabled = false; }
          });
          notice('Set up your portal authenticator to continue.'); return true;
        }
        const qr = element('img'); qr.src = pending.qr_code; qr.alt = 'Private authenticator setup QR'; qr.width = 240; qr.height = 240; container.append(qr);
        const details = element('details'); details.append(element('summary', 'Enter a setup key instead of scanning'));
        details.append(element('code', pending.secret)); container.append(details);
        container.append(element('p', 'Add this to your authenticator, then enter its fresh six-digit code below. Keep this page open until verified.'));
      }
      const label = element('label', 'Six-digit authenticator code'), code = element('input');
      code.type = 'text'; code.inputMode = 'numeric'; code.autocomplete = 'one-time-code'; code.pattern = '[0-9]{6}'; code.maxLength = 6; code.required = true; label.append(code); form.append(label);
      const verify = element('button', 'Verify and continue'); form.append(verify); container.append(form);
      form.addEventListener('submit', async e => {
        e.preventDefault(); if (!/^[0-9]{6}$/.test(code.value)) return;
        verify.disabled = true; const value = code.value; code.value = '';
        try {
          const result = await db.auth.mfa.challengeAndVerify({ factorId, code: value });
          if (!current()) return;
          if (result.error) { notice('Code not accepted. Use a fresh code from this portal authenticator and try again.'); return; }
          pending = null; clear(); await onVerified();
        } catch { if (current()) notice('Verification could not be confirmed. Please retry.'); }
        finally { verify.disabled = false; }
      });
      notice('Verify your portal authenticator to continue.'); return true;
    }
  };
}
