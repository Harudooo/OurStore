const routes = {
    'login': LoginView,
    'register': RegisterView,
    'dashboard': DashboardView,
    'about': AboutUsView,
    'products': ProductTableView
};

function navigate(page) {
    const app = document.getElementById('app');
    const view = routes[page];

    if (view) {
        app.innerHTML = view(); // Injects the HTML from the view function
    } else {
        app.innerHTML = "<h1>404 Page Not Found</h1>";
    }
}

// Set the initial page to Login [cite: 7]
window.onload = () => navigate('login');