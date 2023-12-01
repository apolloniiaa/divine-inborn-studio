document.addEventListener('DOMContentLoaded', function () {
  gsap.to('.main-image', {
    opacity: 1,
    y: 20,
    duration: 1,
    ease: 'power2.out',
    delay: 1,
  });

  gsap.to('.main-image', {
    y: 0,
    duration: 1,
    ease: 'power2.out',
  });

  gsap.to('.title', {
    opacity: 1,
    y: 0,
    duration: 1,
    ease: 'power2.out',
    delay: 1.5,
  });

  gsap.to('.title', {
    y: 5,
    duration: 1,
    ease: 'power2.out',
    opacity: 0,
  });

  gsap.to('.text-overlay', {
    opacity: 1,
    x: 0,
    duration: 1,
    ease: 'power2.out',
    delay: 1,
  });

  gsap.to('.text-overlay', {
    x: 50,
    duration: 1,
    ease: 'power2.out',
  });

  gsap.to('.small-image', {
    opacity: 1,
    x: 30,
    duration: 1,
    ease: 'power2.out',
    delay: 1.2,
  });

  gsap.to('.small-image', {
    x: 0,
    duration: 1,
    ease: 'power2.out',
  });

  gsap.set('.login-form', {
    opacity: 0,
    y: 20,
  });

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
    y: 20,
    duration: 1,
    ease: 'power2.out',
    delay: 2,
  });

  gsap.to('label.navigation_button', {
    y: 0,
    duration: 1,
    ease: 'power2.out',
  });
});

// FORM VALIDATION AND SUBMISSION

function submitForm() {
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;

  document.getElementById('nameError').innerHTML = '';
  document.getElementById('emailError').innerHTML = '';

  if (name.trim() === '') {
    document.getElementById('nameError').innerHTML = 'Name is required';
    return;
  }

  if (email.trim() === '') {
    document.getElementById('emailError').innerHTML = 'Email is required';
    return;
  }

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
