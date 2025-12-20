function RegisterView() {
    return `
        <div class="auth-container">
            <h2>Register Account</h2>
            <form onsubmit="event.preventDefault(); validateRegister();">
                <input type="text" id="regUsername" placeholder="Create Username" required>
                <input type="password" id="regPassword" placeholder="Create Password" required>
                <button type="submit">Register</button>
            </form>
            <p>Already have an account? <a href="#" onclick="navigate('login')">Login here</a></p>
        </div>
    `;
}