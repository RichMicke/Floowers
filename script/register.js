document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registerForm');
    if (!form) {
        console.error('Form with ID "registerForm" not found.');
        return;
    }

    form.addEventListener('submit', function(event) {
        event.preventDefault();

 
        const username = document.getElementById('username').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirmPassword').value;

       
        if (username === '') {
            alert('Username is required.');
            console.log('Username is required.');
            return;
        }

        if (email === '') {
            alert('Email is required.');
            console.log('Email is required.');
            return;
        }

        if (password === '') {
            alert('Password is required.');
            console.log('Password is required.');
            return;
        }

        if (confirmPassword === '') {
            alert('Please confirm your password.');
            console.log('Please confirm your password.');
            return;
        }

        if (password !== confirmPassword) {
            alert('Passwords do not match.');
            console.log('Passwords do not match.');
            return;
        }

        const passwordRegex = /^(?=.*[A-Z]).{8,}$/;
        if (!passwordRegex.test(password)) {
            alert('Password must be at least 8 characters long and contain at least one uppercase letter.');
            console.log('Password must be at least 8 characters long and contain at least one uppercase letter.');
            return;
        }

        alert('Registration successful!');
        console.log('Registration successful!');

    });
});
