import { LOCAL_STORAGE_USER_EMAIL } from './info.js';

// Get the localStorage key for the current user's cart
function getCartKey() {
    const userEmail = localStorage.getItem(LOCAL_STORAGE_USER_EMAIL);
    return userEmail ? `cart-${userEmail}` : 'cart-guest';
}

// Get the cart for the current user
export function getCart() {
    const cartKey = getCartKey();
    const cartJson = localStorage.getItem(cartKey);
    return cartJson ? JSON.parse(cartJson) : [];
}


// Add a product to the cart
export function addToCart(product) {
    const cart = getCart();
    cart.push({
        id: product.id,
        title: product.title,
        image: product.image,
        category: product.category,
    });
    //cart key used to store the cart for the current user
    const cartKey = getCartKey();
    localStorage.setItem(cartKey, JSON.stringify(cart));
}

// Clear the cart for the current user
export function clearCart() {
    const cartKey = getCartKey();
    localStorage.removeItem(cartKey);
}

