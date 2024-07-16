document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

   
    if (username === '') {
        alert('Username is required.');
        return;
    }

    if (email === '') {
        alert('Email is required.');
        return;
    }

    if (password === '') {
        alert('Password is required.');
        return;
    }

    if (confirmPassword === '') {
        alert('Please confirm your password.');
        return;
    }

    if (password !== confirmPassword) {
        alert('Passwords do not match.');
        return;
    }

    alert('Registration successful!');
   
});
