// script.js

// Smooth Scroll for Navigation Links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      // Check if the link is for an internal section (starts with '#')
      if (this.getAttribute('href').charAt(0) === '#') {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth'
          });
        }
      }
    });
  });
  
  
  // Toggle Active Class for Navigation Links
  const navLinks = document.querySelectorAll('nav ul li a');
  navLinks.forEach(link => {
    link.addEventListener('click', function () {
      navLinks.forEach(nav => nav.classList.remove('active'));
      this.classList.add('active');
    });
  });
  
  // Form Validation (if there's a form on any page)
  function validateForm() {
    const form = document.querySelector('form');
    if (!form) return;
  
    form.addEventListener('submit', function (e) {
      const inputs = form.querySelectorAll('input, textarea');
      let valid = true;
  
      inputs.forEach(input => {
        if (input.value.trim() === '') {
          valid = false;
          input.style.borderColor = 'red';
        } else {
          input.style.borderColor = 'green';
        }
      });
  
      if (!valid) {
        e.preventDefault();
        alert('Please fill in all required fields.');
      }
    });
  }
  
  validateForm();
  