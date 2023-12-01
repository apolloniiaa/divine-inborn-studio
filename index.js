document.addEventListener('DOMContentLoaded', function () {
  gsap.to('.main-image', {
    opacity: 1,
    y: 20, // Kezdeti pozíció (fentről érkezik)
    duration: 1,
    ease: 'power2.out',
    delay: 1, // Késleltetés 1 másodperc
  });

  gsap.to('.main-image', {
    y: 0, // Végleges pozíció (nem mozdul el, marad a helyén)
    duration: 1,
    ease: 'power2.out',
  });

  gsap.to('.title', {
    opacity: 1,
    y: 0, // Kezdeti pozíció
    duration: 1,
    ease: 'power2.out',
    delay: 1.5, // Két másodperces késleltetés
  });

  gsap.to('.title', {
    y: 5, // Végleges pozíció
    duration: 1,
    ease: 'power2.out',
    opacity: 0,
  });

  gsap.to('.text-overlay', {
    opacity: 1,
    x: 0, // Kezdeti pozíció
    duration: 1,
    ease: 'power2.out',
    delay: 1, // Két másodperces késleltetés
  });

  gsap.to('.text-overlay', {
    x: 50, // Végleges pozíció
    duration: 1,
    ease: 'power2.out',
  });

  gsap.to('.small-image', {
    opacity: 1,
    x: 30, // Kezdeti pozíció
    duration: 1,
    ease: 'power2.out',
    delay: 1.2, // 1.2 másodperces késleltetés
  });

  gsap.to('.small-image', {
    x: 0, // Végleges pozíció
    duration: 1,
    ease: 'power2.out',
  });

  gsap.set('.login-form', {
    opacity: 0,
    y: 20,
  });

  // Animáció
  gsap.to('.login-form', {
    opacity: 1,
    y: 0,
    duration: 1,
    ease: 'power2.out',
    delay: 1,
  });

  gsap.set('.contact2', {
    opacity: 0,
    y: 20,
  });

  // Animáció
  gsap.to('.contact2', {
    opacity: 1,
    y: 0,
    duration: 1,
    ease: 'power2.out',
  });

  gsap.set('.name', {
    opacity: 0,
    y: 20,
  });

  gsap.to('.name', {
    opacity: 1,
    y: 0,
    duration: 2,
    ease: 'power2.out',
    delay: 1.8,
  });
  gsap.set('.email', {
    opacity: 0,
    y: 20,
  });

  gsap.to('.email', {
    opacity: 1,
    y: 0,
    duration: 2,
    ease: 'power2.out',
    delay: 2,
  });

  gsap.set('.message', {
    opacity: 0,
    y: 20,
  });

  gsap.to('.message', {
    opacity: 1,
    y: 0,
    duration: 2,
    ease: 'power2.out',
    delay: 2.1,
  });

  gsap.set('.login-btn', {
    opacity: 0,
    y: 20,
  });

  gsap.to('.login-btn', {
    opacity: 1,
    y: 0,
    duration: 2,
    ease: 'power2.out',
    delay: 2.5,
  });

  gsap.set('.name', {
    opacity: 0,
    y: 20,
  });

  gsap.to('.name', {
    opacity: 1,
    y: 0,
    duration: 2,
    ease: 'power2.out',
    delay: 1.8,
  });
  gsap.to('label.navigation_button', {
    opacity: 1,
    y: 20, // Kezdeti pozíció (fentről érkezik)
    duration: 1,
    ease: 'power2.out',
    delay: 2, /// Késleltetés
  });

  gsap.to('label.navigation_button', {
    y: 0, // Végleges pozíció (nem mozdul el, marad a helyén)
    duration: 1,
    ease: 'power2.out',
  });
});

//FORM
function submitForm() {
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;

  // Clear previous error messages
  document.getElementById('nameError').innerHTML = '';
  document.getElementById('emailError').innerHTML = '';

  // Simple validation
  if (name.trim() === '') {
    document.getElementById('nameError').innerHTML = 'Name is required';
    return;
  }

  if (email.trim() === '') {
    document.getElementById('emailError').innerHTML = 'Email is required';
    return;
  }

  // Validate email format
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    document.getElementById('emailError').innerHTML = 'Invalid Email format';
    return;
  }

  var formData = {
    name: name,
    email: email,
    message: document.getElementById('message').value,
  };

  // Send data to getform.io
  fetch('https://getform.io/f/97facff9-3ed8-46bc-abc8-031a10c61426', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
  })
    .then((response) => response.text())
    .then((data) => {
      if (data.includes('success')) {
        alert(
          'Hooray! Your message just landed in my inbox. 🚀 I am excited to read it and will get back to you in a heartbeat.✨'
        );
      } else {
        alert('Form submission failed. Please try again.');
      }
    })
    .catch((error) => {
      console.error('Error submitting form:', error);
      alert('Form submission failed. Please try again.');
    });
}
