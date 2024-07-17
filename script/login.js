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



    const passwordRegex = /^(?=.*[A-Z]).{8,}$/;
    if(!passwordRegex.test(password)){
        alert('Password must be at least 8 characters long and contain at least one uppercarse letter.');
        return;
    }
   


    alert('Login successful!');
    this.submit();
});
