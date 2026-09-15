const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const loginButton = document.getElementById('loginButton');
    loginButton.addEventListener('click', function() {
        const username = usernameInput.value;
        const password = passwordInput.value;
        if (username == "" || password == "") {
            alert('Please fill in all fields.');
            return;
        }
        if (username === "Guest" && password === "123456") {
            window.location.href = 'main.html';
        } else {
            alert('Invalid username or password.');
        }
    });