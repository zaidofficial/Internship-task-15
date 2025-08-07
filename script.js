// toggle theme change
const toggle = document.getElementById('toggleTheme');
const icon = toggle.querySelector('i');

toggle.addEventListener('click', () => {
    document.body.classList.toggle('dark');

  // Switch icons between moon and sun
    if (document.body.classList.contains('dark')) {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    }
});

//Validate both fields are not empty
//Validate email format using regex
//Show error messages below each field on invalid input
const form = document.getElementById('signupForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    // Clear previous messages
    nameError.textContent = '';
    emailError.textContent = '';

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    let isValid = true;

    // Name validation
    if (name === '') {
        nameError.textContent = 'Full name is required.';
        isValid = false;
    }

    // Email validation
    if (email === '') {
        emailError.textContent = 'Email is required.';
        isValid = false;
    } else if (!validateEmail(email)) {
        emailError.textContent = 'Please enter a valid email address.';
        isValid = false;
    }

    if (isValid) {
        alert('Thank you for subscribing!');
        form.reset();
    }
    });

    // Email regex validation
    function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
    }
