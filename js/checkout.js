import { getCart, clearCart } from './cart.js';
import { showModal } from './modal.js';

displayCart();
setupCheckoutForm();
setupClearCartButton();

function displayCart() {
    const cart = getCart();
    const cartSection = document.querySelector('#shopping-cart');
    

    cart.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <img src="${item.image}" alt="${item.title}">
            <p>${item.title}</p>
        `;
        cartSection.appendChild(cartItem);
    });
}
    //Remove the button when done 
function setupClearCartButton() {
    const cartSection = document.querySelector('#shopping-cart');
    let clearButton = cartSection.querySelector('#clear-cart-btn');
    if (!clearButton) {
        clearButton = document.createElement('button');
        clearButton.id = 'clear-cart-btn';
        clearButton.textContent = 'Clear cart';
        clearButton.type = 'button';
        cartSection.appendChild(clearButton);
    }
    
    clearButton.addEventListener('click', () => {
        clearCart();
        displayCart();
    });
}

function setupCheckoutForm() {
    const form = document.querySelector('#payment-section form');
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        // just incase cart is empty and you try and checkout 
        const cart = getCart();
        if (cart.length === 0) {
            showModal('Error', 'Your cart is empty.');
            return;
        }
        showModal('Order Confirmed', 'Thank you for your purchase!');
        clearCart();
        form.reset();
        displayCart();
    });
}

