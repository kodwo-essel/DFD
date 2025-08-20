function togglePassword(inputId) { 
    const passwordInput = document.getElementById(inputId); 
    const toggleIcon = passwordInput.nextElementSibling.querySelector('i'); 
    if (passwordInput.type === 'password') { 
        passwordInput.type = 'text'; 
        toggleIcon.classList.remove('fa-eye'); 
        toggleIcon.classList.add('fa-eye-slash'); 
    } else { 
        passwordInput.type = 'password'; 
        toggleIcon.classList.remove('fa-eye-slash'); 
        toggleIcon.classList.add('fa-eye'); } 
} 

function checkPasswordStrength(password) { 
    let strength = 0; 
    const strengthBar = document.getElementById('strengthBar'); 
    const strengthText = document.getElementById('strengthText'); 
    if (password.length >= 8) strength += 1; 
    if (password.length >= 12) strength += 1;
    if (/[A-Z]/.test(password)) strength += 1; 
    if (/[0-9]/.test(password)) strength += 1; 
    if (/[^A-Za-z0-9]/.test(password)) strength += 1;
    strengthBar.className = ''; 
    if (strength <= 2) { 
        strengthBar.classList.add('strength-weak'); 
        strengthText.textContent = 'Weak password'; 
        strengthBar.style.width = '33%'; 
    } else if (strength <= 4) { 
        strengthBar.classList.add('strength-medium'); 
        strengthText.textContent = 'Medium password'; 
        strengthBar.style.width = '66%'; 
    } else { strengthBar.classList.add('strength-strong'); 
        strengthText.textContent = 'Strong password'; 
        strengthBar.style.width = '100%'; 
    } 
} 

document.getElementById('password').addEventListener('input', 
    function() { checkPasswordStrength(this.value); });

document.getElementById('signupForm').addEventListener('submit', 
    function(e) { 
        let isValid = true; const username = document.getElementById('username'); 
        const email = document.getElementById('email'); 
        const password = document.getElementById('password'); 
        const confirmPassword = document.getElementById('confirm_password'); 
        const submitBtn = document.getElementById('submitBtn');

        if (!username.value.match(/^[a-zA-Z0-9_]{3,20}$/)) { 
            username.classList.add('input-invalid'); isValid = false; 
        } else { 
            username.classList.remove('input-invalid'); 
        } 
        
        if (!email.value.match(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i)) { 
            email.classList.add('input-invalid'); isValid = false; 
        } else { 
            email.classList.remove('input-invalid'); 
        } 
        
        if (password.value.length < 8) { 
            password.classList.add('input-invalid'); isValid = false; 
        } else { 
            password.classList.remove('input-invalid'); 
        } 
        
        if (password.value !== confirmPassword.value) { 
            confirmPassword.classList.add('input-invalid'); 
            isValid = false; 
        } else { confirmPassword.classList.remove('input-invalid'); 

        } 
        
        if (!isValid) { 
            e.preventDefault(); 

        } else { 
            submitBtn.textContent = 'Creating account...'; 
            submitBtn.disabled = true; 
        } }); 


const inputs = document.querySelectorAll('input'); 
inputs.forEach(input => 
    { input.addEventListener('input', 
        function() { 
            if (this.value) { 
                this.classList.remove('input-invalid'); 
            } 
            if (this.id === 'password' || this.id === 'confirm_password') {
                    const password = document.getElementById('password'); 
                    const confirmPassword = document.getElementById('confirm_password'); 
            if (confirmPassword.value) { 
                if (password.value === confirmPassword.value) {
                        confirmPassword.classList.remove('input-invalid'); 
                } else { 
                    confirmPassword.classList.add('input-invalid'); } } } }); });