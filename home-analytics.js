(() => {
  const preferenceKey = 'obanimistudio-home-analytics-v1';
  const controls = document.getElementById('analytics-preferences');
  const status = controls.querySelector('[role="status"]');
  let preference;
  let sent = false;

  try {
    preference = localStorage.getItem(preferenceKey);
  } catch {
    status.textContent = 'Analytics preferences are unavailable. Analytics are off.';
    return;
  }

  function update() {
    for (const button of controls.querySelectorAll('button')) {
      button.setAttribute('aria-pressed', String(button.value === preference));
    }
    status.textContent = preference === 'allow' ? 'Analytics are on.' : 'Analytics are off.';
    if (preference !== 'allow' || sent) return;
    sent = true;
    const pixel = document.createElement('img');
    pixel.alt = '';
    pixel.hidden = true;
    pixel.referrerPolicy = 'origin';
    pixel.src = 'https://tracker.metricool.com/c3po.jpg?hash=50403d5def7d598cca4e2630d4c02c60';
    controls.append(pixel);
  }

  controls.addEventListener('click', event => {
    const button = event.target.closest('button');
    if (!button) return;
    try {
      localStorage.setItem(preferenceKey, button.value);
    } catch {
      status.textContent = 'Your browser could not save this choice.';
      return;
    }
    preference = button.value;
    update();
  });
  controls.hidden = false;
  update();
})();
