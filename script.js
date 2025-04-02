function setLanguage(lang) {
  document.querySelectorAll('[data-en]').forEach(el => {
    const html = el.getAttribute(`data-${lang}`);
    if (html) el.innerHTML = html;
  });
}

function toggleMessage() {
  const box = document.getElementById('message-box');
  const arrow = document.getElementById('arrow');

  if (box.style.display === 'none' || box.style.display === '') {
    box.style.display = 'block';
    arrow.innerHTML = '&#9650;';
  } else {
    box.style.display = 'none';
    arrow.innerHTML = '&#9660;';
  }
}

window.onload = () => {
  setLanguage('hi'); // Load default Hindi on page load
};


// EmailJS Registration Form
document.getElementById("register-form").addEventListener("submit", function(event) {
  event.preventDefault();
  emailjs.sendForm('service_id', 'template_id', this, 'user_id')
    .then(() => alert("Registration successful!"))
    .catch(error => alert("Error occurred: " + JSON.stringify(error)));
});


// EmailJS Raise a Concern Form
document.getElementById("concern-form").addEventListener("submit", function(event) {
  event.preventDefault();
  emailjs.sendForm('service_id', 'template_id_concern', this, 'user_id')
    .then(() => alert("Concern submitted successfully!"))
    .catch(error => alert("Error occurred: " + JSON.stringify(error)));
});
