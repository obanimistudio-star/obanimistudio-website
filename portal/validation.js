export function safePreview(value) {
  if (!value || value.length > 2048) return null;
  try { const url = new URL(value); return url.protocol === 'https:' && !url.username && !url.password ? url.href : null; } catch { return null; }
}
export function validConfig(cfg) {
  if (!/^https:\/\/[a-z0-9-]+\.supabase\.co\/?$/.test(cfg.url || '') || !/^sb_publishable_[A-Za-z0-9_-]+$/.test(cfg.publishableKey || '')) return false;
  // An exact redirect prevents arbitrary callback URLs, including query-string redirects.
  return cfg.redirectUrl === 'https://obanimistudio.com/portal/';
}
