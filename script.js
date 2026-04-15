const leadForm = document.getElementById('leadForm');
const successState = document.getElementById('successState');

if (leadForm && successState) {
  leadForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    const formData = new FormData(leadForm);

    try {
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData).toString(),
      });
    } catch (error) {
      console.warn('Form submission will work after deployment on Netlify.', error);
    }

    leadForm.hidden = true;
    successState.hidden = false;
    successState.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
}
