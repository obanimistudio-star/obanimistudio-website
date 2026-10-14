// Public browser configuration only. Never insert service-role or secret keys.
{
  const callbacks = {
    'https://obanimistudio.com': 'https://obanimistudio.com/portal/',
    'https://obanimistudio-staging.pages.dev': 'https://obanimistudio-staging.pages.dev/portal/'
  };
  window.OBANIMI_PORTAL_CONFIG = Object.freeze({ url: "https://vteihksnoxuiadhsodzv.supabase.co", publishableKey: "sb_publishable_WDYciU0jjV6QKrjr1Oybbg_CShYwL4z", redirectUrl: callbacks[window.location.origin] || '' });
}
