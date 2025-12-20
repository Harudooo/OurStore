function validateRegister() {
    const user = document.getElementById('regUsername').value;
    const pass = document.getElementById('regPassword').value;

    if (user.trim() === "" || pass.trim() === "") {
        alert("Please fill out all fields.");
        return;
    }

    // Save the credentials to the browser's local storage
    localStorage.setItem(user, pass); 
    
    alert("Registration Successful for " + user + "! You can now login.");
    navigate('login'); // Redirect to login view [cite: 32]
}

// --- LOGIN LOGIC ---
function validateLogin() {
    const userField = document.getElementById('username').value;
    const passField = document.getElementById('password').value;

    // Retrieve the "saved" password for this username
    const savedPassword = localStorage.getItem(userField);

    if (savedPassword && savedPassword === passField) {
        alert("Login Successful!");
        navigate('dashboard'); // Navigate to E-commerce dashboard [cite: 8, 36]
    } else {
        alert("Invalid Username or Password. Please register first.");
    }
}