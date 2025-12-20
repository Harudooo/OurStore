function DashboardView() {
    return `
        ${Navbar()} 
        <div class="main-content">
            <h1>Welcome to our Storage Room</h1> 
            <p>We sell products from our Storage Room.</p>
            
            <div class="carousel">
                <div class="carousel-item">
                    <img src="photo1.jpg" alt="Promo 1" style="width:100%">
                </div>
            </div>

            <div class="features">
                <h3>Products Category:</h3>
                <ul>
                    <li>
  <a onclick="navigate('products')" style="cursor: pointer;">
    Best Sellers
  </a>
</li>
  <li>
  <a onclick="navigate('products')" style="cursor: pointer;">
    High Quality Products
  </a>
</li>
                </ul>
            </div>
        </div>
    `;
}

// Reusable Navigation Component
function Navbar() {
    return `
        <nav class="navbar">
            <div class="logo">OurStore</div>
            <ul class="nav-links">
                <li><a href="#" onclick="navigate('dashboard')">Home</a></li>
                <li><a href="#" onclick="navigate('products')">Products</a></li> 
                <li><a href="#" onclick="navigate('about')">About Us</a></li> 
                <li><a href="#" onclick="navigate('login')">Logout</a></li>
            </ul>
        </nav>
    `;
}