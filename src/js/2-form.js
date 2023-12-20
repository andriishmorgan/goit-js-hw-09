
  document.addEventListener('DOMContentLoaded', () => {
  const feedbackForm = document.querySelector('.feedback-form');

  feedbackForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const { email, message } = feedbackForm.elements;
    const userData = {
      email: email.value,
      message: message.value,
    };

    localStorage.removeItem('feedback-form-state');
    email.value = '';
    message.value = '';

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
      email: email.value,
      message: message.value,
    };

    localStorage.setItem('feedback-form-state', JSON.stringify(userData));
  });
});
