document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
  
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
  
    const responseMessage = document.getElementById('response-message');
  
    // Simple form validation and feedback
    if (name && email && message) {
      responseMessage.textContent = `Thank you, ${name}! Your message has been sent.`;
      responseMessage.style.backgroundColor = 'rgba(0, 255, 0, 0.2)';
      responseMessage.classList.remove('hidden');
    } else {
      responseMessage.textContent = 'Please fill out all fields.';
      responseMessage.style.backgroundColor = 'rgba(255, 0, 0, 0.2)';
      responseMessage.classList.remove('hidden');
    }
  });