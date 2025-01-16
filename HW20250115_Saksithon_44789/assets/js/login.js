// Toggle Password Visibility
document.getElementById('togglePassword').addEventListener('click', function () {
    const passwordField = document.getElementById('yourPassword');
    const type = passwordField.type === 'password' ? 'text' : 'password';
    passwordField.type = type;
    this.textContent = type === 'password' ? '👁️' : '🙈';
});

// Form Validation and Redirection
document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault();
    let isValid = true;

    // Username validation
    const usernameField = document.getElementById('yourUsername');
    const usernameError = document.getElementById('usernameError');
    if (usernameField.value.trim() === '') {
        usernameError.textContent = 'Please enter your username.';
        usernameError.classList.remove('d-none');
        isValid = false;
    } else {
        usernameError.classList.add('d-none');
    }

    // Password validation
    const passwordField = document.getElementById('yourPassword');
    const passwordError = document.getElementById('passwordError');
    if (passwordField.value.trim() === '') {
        passwordError.textContent = 'Please enter your password.';
        passwordError.classList.remove('d-none');
        isValid = false;
    } else {
        passwordError.classList.add('d-none');
    }

    // Check credentials
    if (isValid) {
        const username = usernameField.value.trim();
        const password = passwordField.value.trim();

        // Example credentials
        const validUsername = 'admin';
        const validPassword = '12345';

        if (username === validUsername && password === validPassword) {
            Swal.fire({
                title: 'Login Successful!',
                text: 'You will be redirected shortly.',
                icon: 'success',
                timer: 2000, // ปิดอัตโนมัติใน 2 วินาที
                showConfirmButton: false
            }).then(() => {
                window.location.href = './././pages/home.html';
            });
        } else {
            Swal.fire({
                title: 'Login Failed',
                text: 'Invalid username or password. Please try again.',
                icon: 'error',
                confirmButtonText: 'OK'
            });
        }
    }
});
