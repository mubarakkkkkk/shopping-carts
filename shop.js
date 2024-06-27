// Initialize cart
let cart = [];

// Get all "Add to Cart" buttons
const addToCartButtons = document.querySelectorAll('.product button');

// Add click event listeners to all "Add to Cart" buttons
addToCartButtons.forEach(button => {
    button.addEventListener('click', addToCart);
});

// Function to add item to cart
function addToCart(event) {
    const button = event.target;
    const product = button.closest('.product');
    const productName = product.querySelector('h3').textContent;
    const productPrice = parseFloat(product.querySelector('p').textContent.replace('$', ''));

    // Add item to cart array
    cart.push({name: productName, price: productPrice});

    // Update cart count
    updateCartCount();

    // Optional: Show a confirmation message
    alert(`${productName} added to cart!`);
}

// Function to update cart count
function updateCartCount() {
    const cartCount = document.createElement('span');
    cartCount.textContent = cart.length;
    cartCount.classList.add('cart-count');

    // Remove existing cart count if present
    const existingCartCount = document.querySelector('.cart-count');
    if (existingCartCount) {
        existingCartCount.remove();
    }

    // Add new cart count
    const cartLink = document.querySelector('a[href="#cart"]');
    cartLink.appendChild(cartCount);
}

// Optional: Function to view cart contents
function viewCart() {
    let cartContents = 'Cart Contents:\n\n';
    let total = 0;

    cart.forEach((item, index) => {
        cartContents += `${index + 1}. ${item.name} - $${item.price.toFixed(2)}\n`;
        total += item.price;
    });

    cartContents += `\nTotal: $${total.toFixed(2)}`;

    alert(cartContents);
}

// Add click event listener to cart link
document.querySelector('a[href="#cart"]').addEventListener('click', function(event) {
    event.preventDefault();
    viewCart();
});