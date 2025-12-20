function ProductTableView() {
    const products = [
        { id: 101, name: "Dirtiet Short", price: "₱250.00", image: "short.jpg" },
        { id: 102, name: "Dirty T-shirt", price: "₱120.00", image: "tshirt.jpg" },
        { id: 103, name: "Socks", price: "₱35.00", image: "socks.jpg" },
        { id: 104, name: "Brief", price: "₱45.00", image: "brief.jpg" },
        { id: 105, name: "Dead Mouse", price: "₱75.00", image: "deadmouse.jpg" } // Picture 5
    ];

    // Helper to create a square product card
    const createCard = (p) => `
        <div class="product-card">
            <img src="${p.image}" alt="${p.name}">
            <button class="buy-btn">Buy Now</button>
        </div>
    `;

    return `
        <style>
            .main-content { font-family: sans-serif; padding: 20px; }
            .section-title { text-align: left; margin-bottom: 20px; }
            
            /* Rectangular Containers */
            .product-container {
                border: 2px solid #333;
                padding: 20px;
                margin-bottom: 30px;
                display: flex;
                flex-direction: column;
                align-items: center;
            }

            /* Row for the 4 cards */
            .product-row {
                display: flex;
                justify-content: space-around;
                width: 100%;
                gap: 15px;
                margin-bottom: 15px;
            }

            /* Square Card Styling */
            .product-card {
                width: 150px;
                height: 150px;
                border: 1px solid #ccc;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                align-items: center;
                padding: 10px;
                background: #f9f9f9;
            }

            .product-card img {
                width: 80px;
                height: 80px;
                object-fit: cover;
            }

            .buy-btn {
                background-color: #007bff;
                color: white;
                border: none;
                padding: 5px 10px;
                cursor: pointer;
                width: 100%;
                font-size: 12px;
            }

            .container-label {
                font-weight: bold;
                font-size: 1.2rem;
                margin-top: 10px;
            }
        </style>

        ${Navbar()}
        <div class="main-content">
            <h1 class="section-title">Products</h1>

            <div class="product-container">
                <div class="product-row">
                    ${products.slice(0, 4).map(p => createCard(p)).join('')}
                </div>
                <div class="container-label">Best Seller</div>
            </div>

            <div class="product-container">
                <div class="product-row">
                    ${createCard(products[4])}
                </div>
                <div class="container-label">High Quality Product</div>
            </div>
        </div>
    `;
}