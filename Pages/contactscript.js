// Initialize EmailJS
emailjs.init('_CyuVBREkOBvpex6B'); // Replace with your Public Key from EmailJS

document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent default form submission

  // Get form values
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  // EmailJS parameters
  const templateParams = {
    name: name,
    email: email,
    message: message,
  };

  // Send email using EmailJS
  emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams)
    .then(function(response) {
      alert('Message sent successfully!');
    }, function(error) {
      alert('Failed to send the message. Please try again later.');
    });
});