document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

   
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;


    if (email === '') {
        alert('Email is required.');
        return;
    }

    if (password === '') {
        alert('Password is required.');
        return;
    }

   


    alert('Login successful!');
    this.submit();
});
