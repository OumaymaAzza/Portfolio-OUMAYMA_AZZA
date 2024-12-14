
emailjs.init({
  publicKey: "8GmoUPeEIFeZ_a9qR",
});

document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault(); 

  
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  
  emailjs.send('service_nmr9pk3', 'template_zdu8uya', {
    from_name: name,
    from_email: email,
    message: message
  })
  .then(function(response) {
   
    console.log('Message envoyé avec succès !', response.status, response.text);
    document.getElementById('response-message').style.display = 'block'; 
    document.getElementById('error-message').style.display = 'none'; 
  }, function(error) {
   
    console.error('Erreur lors de l\'envoi du message :', error);
    document.getElementById('error-message').style.display = 'block';
    document.getElementById('response-message').style.display = 'none'; 
  });


  document.getElementById('contact-form').reset();
});
