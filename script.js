const toggleButtons = document.querySelectorAll('[data-toggle]');

toggleButtons.forEach((btn) => {
  btn.addEventListener('click', () => {
    const target = document.querySelector(btn.dataset.toggle);
    target?.classList.toggle('open');
  });
});

const themeSwitcher = document.querySelector('#theme-switch');
if (themeSwitcher) {
  themeSwitcher.addEventListener('change', () => {
    document.body.classList.toggle('light', themeSwitcher.checked);
  });
}

function fillProgressBars() {
  document.querySelectorAll('[data-progress]')
    .forEach((el) => {
      const value = el.dataset.progress;
      el.style.setProperty('--value', `${value}%`);
      el.style.background = `linear-gradient(90deg, #4f46e5 ${value}%, rgba(255,255,255,0.08) ${value}%)`;
    });
}

fillProgressBars();
