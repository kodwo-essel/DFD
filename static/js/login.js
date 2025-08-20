
function togglePassword() {
    const passwordInput = document.getElementById('password');
    const toggleIcon = document.querySelector('.password-toggle i');
    
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        toggleIcon.classList.remove('fa-eye');
        toggleIcon.classList.add('fa-eye-slash');
    } else {
        passwordInput.type = 'password';
        toggleIcon.classList.remove('fa-eye-slash');
        toggleIcon.classList.add('fa-eye');
    }
}

document.getElementById('loginForm').addEventListener('submit', function(e) {
    let isValid = true;
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const submitBtn = document.getElementById('submitBtn');

    // Email validation
    if (!email.value || !email.value.match(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i)) {
        email.classList.add('input-invalid');
        isValid = false;
    } else {
        email.classList.remove('input-invalid');
    }

    // Password validation
    if (!password.value) {
        password.classList.add('input-invalid');
        isValid = false;
    } else {
        password.classList.remove('input-invalid');
    }

    if (!isValid) {
        e.preventDefault();
    } else {
        submitBtn.textContent = 'Logging in...';
        submitBtn.disabled = true;
    }
});

// Real-time validation
const inputs = document.querySelectorAll('input');
inputs.forEach(input => {
    input.addEventListener('input', function() {
        if (this.value) {
            this.classList.remove('input-invalid');
        }
    });
});
