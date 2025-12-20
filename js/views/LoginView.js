
Harold
function LoginView() {
    return `
        <div class="auth-container">
            <h2>Login</h2>
            
            <form id="loginForm" onsubmit="event.preventDefault(); validateLogin();">
                <div class="form-group">
                    <input type="text" id="username" placeholder="Username" required>
                </div>
                <div class="form-group">
                    <input type="password" id="password" placeholder="Password" required>
                </div>
                <button type="submit" class="btn-primary">Login</button>
            </form>
            
            <div class="auth-footer">
                <p>Don't have an account? 
                   <a href="#" onclick="navigate('register')">Register here</a>
                </p>
            </div>
        </div>
    `;
}