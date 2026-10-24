/* Add verified Payhip product-page links only after account setup and owner approval.
   Paid source files stay in the delivery service, never in this public repository. */
(() => {
  'use strict';
  const checkoutLinks = Object.freeze({weekly: '', event: '', content: '', bundle: ''});
  let active = 0;
  document.querySelectorAll('.checkout[data-product]').forEach(button => {
    const candidate = checkoutLinks[button.dataset.product];
    if (!candidate) return;
    let url;
    try { url = new URL(candidate); } catch (_) { return; }
    if (url.protocol !== 'https:' || url.hostname !== 'payhip.com' || !/^\/b\/[A-Za-z0-9]+\/?$/.test(url.pathname) || url.search || url.hash) return;
    const link = document.createElement('a');
    link.className = button.className;
    link.href = url.href;
    link.textContent = 'Buy & download';
    link.setAttribute('aria-label', 'Buy ' + (button.closest('section.bundle') ? 'the complete collection' : button.closest('article').querySelector('h2').textContent));
    button.replaceWith(link);
    active++;
  });
  if (active === Object.keys(checkoutLinks).length) {
    document.getElementById('shop-state').textContent = 'Digital downloads · Ready to use';
    document.querySelector('.shop-note').textContent = 'Digital products only. Payment and delivery details are shown at checkout.';
  }
})();
