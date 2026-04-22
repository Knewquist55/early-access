const form = document.getElementById('leadForm');
const successPanel = document.getElementById('successPanel');

if (form && successPanel) {
  form.addEventListener('submit', function () {
    setTimeout(() => {
      successPanel.hidden = false;
      successPanel.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }, 150);
  });
}
