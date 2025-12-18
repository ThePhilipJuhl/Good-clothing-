import { BASE_URL } from './info.js';
import { addToCart } from './cart.js';

const showProduct = (product) => {
    document.querySelector('#productNameBreadcrumb').textContent = product.title;

    const productImage = document.querySelector('#productImage');
    productImage.src = product.image;
    productImage.alt = product.title;

    document.querySelector('#productCategory').textContent = product.category;
    document.querySelector('#productTitle').textContent = product.title;
    document.querySelector('#productPrice').textContent = `$${product.price.toFixed(2)}`;
   
    // Update all descriptions
    const descriptions = document.querySelectorAll('.productDescription');
    descriptions.forEach(desc => {
        desc.textContent = product.description;
    });

    const btnAddToCart = document.querySelector('#btnAddToCart');
    btnAddToCart.addEventListener('click', () => {
        addToCart(product);
    });
};

const queryParams = new URLSearchParams(location.search);
const productId = queryParams.get('id');

if (!productId) {
    console.error('No product ID provided');
    window.location.href = 'products.htm';
} else {
    fetch(`${BASE_URL}/${productId}`)
        .then(response => response.json())
        .then(data => {
            showProduct(data);
        })
        .catch(error => console.log(error));
}

