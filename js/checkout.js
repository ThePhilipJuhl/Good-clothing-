import { getCart, clearCart } from './cart.js';
import { showModal } from './modal.js';
import { LOCAL_STORAGE_USER_EMAIL } from './info.js';

displayCart();
setupCheckoutForm();

function displayCart() {
    const cart = getCart();
    const cartItems = document.querySelector('#cart-items');
    const cartItemTemplate = document.querySelector('#cartItemTemplate');
    
    // create the docuemnt fragment so we only append once to the dom
    const fragment = document.createDocumentFragment();

    if (cart.length === 0) {
        // create <p> dynamically so its semantically correct
        const emptyMessage = document.createElement('p');
        emptyMessage.textContent = 'Your cart is empty.';
        fragment.appendChild(emptyMessage);
    } else {
        cart.forEach((item, index) => {
            const cartItem = cartItemTemplate.content.cloneNode(true);

            const cartItemImg = cartItem.querySelector('img');
            const cartItemCategory = cartItem.querySelector('.cart-item-category');
            const cartItemTitle = cartItem.querySelector('.cart-item-title');
            const btnRemoveItem = cartItem.querySelector('.btn-remove-item');

            cartItemImg.src = item.image;
            cartItemImg.alt = item.title;
            cartItemCategory.textContent = item.category || '';
            cartItemTitle.textContent = item.title;

            btnRemoveItem.addEventListener('click', () => {
                removeItemFromCart(index);
            });

            // append it to the fragment
            fragment.appendChild(cartItem);
        });
    }

    // Append it to the dom only
    cartItems.replaceChildren(fragment);
}


function removeItemFromCart(index) {
    const cart = getCart();
    cart.splice(index, 1);
    const userEmail = localStorage.getItem(LOCAL_STORAGE_USER_EMAIL);
    const cartKey = userEmail ? `cart-${userEmail}` : 'cart-guest';
    localStorage.setItem(cartKey, JSON.stringify(cart));
    displayCart();
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

