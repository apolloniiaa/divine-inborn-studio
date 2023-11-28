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
});

document.addEventListener('DOMContentLoaded', function () {
  const hamburger = document.querySelector('.hamburger');
  const navList = document.querySelector('.nav-list');

  hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('active');
    navList.classList.toggle('active');
  });
});

// vars
('use strict');
var testim = document.getElementById('testim'),
  testimDots = Array.prototype.slice.call(
    document.getElementById('testim-dots').children
  ),
  testimContent = Array.prototype.slice.call(
    document.getElementById('testim-content').children
  ),
  testimLeftArrow = document.getElementById('left-arrow'),
  testimRightArrow = document.getElementById('right-arrow'),
  testimSpeed = 4500,
  currentSlide = 0,
  currentActive = 0,
  testimTimer,
  touchStartPos,
  touchEndPos,
  touchPosDiff,
  ignoreTouch = 30;
window.onload = function () {
  // Testim Script
  function playSlide(slide) {
    for (var k = 0; k < testimDots.length; k++) {
      testimContent[k].classList.remove('active');
      testimContent[k].classList.remove('inactive');
      testimDots[k].classList.remove('active');
    }

    if (slide < 0) {
      slide = currentSlide = testimContent.length - 1;
    }

    if (slide > testimContent.length - 1) {
      slide = currentSlide = 0;
    }

    if (currentActive != currentSlide) {
      testimContent[currentActive].classList.add('inactive');
    }
    testimContent[slide].classList.add('active');
    testimDots[slide].classList.add('active');

    currentActive = currentSlide;

    clearTimeout(testimTimer);
    testimTimer = setTimeout(function () {
      playSlide((currentSlide += 1));
    }, testimSpeed);
  }

  testimLeftArrow.addEventListener('click', function () {
    playSlide((currentSlide -= 1));
  });

  testimRightArrow.addEventListener('click', function () {
    playSlide((currentSlide += 1));
  });

  for (var l = 0; l < testimDots.length; l++) {
    testimDots[l].addEventListener('click', function () {
      playSlide((currentSlide = testimDots.indexOf(this)));
    });
  }

  playSlide(currentSlide);

  // keyboard shortcuts
  document.addEventListener('keyup', function (e) {
    switch (e.keyCode) {
      case 37:
        testimLeftArrow.click();
        break;

      case 39:
        testimRightArrow.click();
        break;

      case 39:
        testimRightArrow.click();
        break;

      default:
        break;
    }
  });

  testim.addEventListener('touchstart', function (e) {
    touchStartPos = e.changedTouches[0].clientX;
  });

  testim.addEventListener('touchend', function (e) {
    touchEndPos = e.changedTouches[0].clientX;

    touchPosDiff = touchStartPos - touchEndPos;

    console.log(touchPosDiff);
    console.log(touchStartPos);
    console.log(touchEndPos);

    if (touchPosDiff > 0 + ignoreTouch) {
      testimLeftArrow.click();
    } else if (touchPosDiff < 0 - ignoreTouch) {
      testimRightArrow.click();
    } else {
      return;
    }
  });
};

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

  // Prepare data for getform.io
  var formData = {
    name: name,
    email: email,
    message: document.getElementById('message').value,
  };

  // Send data to getform.io
  fetch('YOUR_FORM_ENDPOINT', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.status === 'success') {
        alert('Form submitted successfully!');
      } else {
        alert('Form submission failed. Please try again.');
      }
    })
    .catch((error) => {
      console.error('Error submitting form:', error);
      alert('Form submission failed. Please try again.');
    });
}
