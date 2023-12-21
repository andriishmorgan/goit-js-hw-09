document.addEventListener('DOMContentLoaded', () => {
  const feedbackForm = document.querySelector('.feedback-form');

feedbackForm.addEventListener('submit', (event) => {
    event.preventDefault();

  const { email, message } = event.currentTarget.elements;

    if (!email.value.trim() || !message.value.trim()) {
      alert('Please fill in all fields');
      return;
    }

    const userData = {
      email: email.value.trim(),
      message: message.value.trim(),
    };

    event.currentTarget.reset();

    console.log(userData);
  });

  const storedUserData = localStorage.getItem('feedback-form-state');
  if (storedUserData) {
    const { email, message } = JSON.parse(storedUserData);
    feedbackForm.elements.email.value = email;
    feedbackForm.elements.message.value = message;
  }

  feedbackForm.addEventListener('input', (event) => {
    const { email, message } = event.currentTarget.elements;
    const userData = {
      email: email.value.trim(),
      message: message.value.trim(),
    };

    localStorage.setItem('feedback-form-state', JSON.stringify(userData));
  });
});
