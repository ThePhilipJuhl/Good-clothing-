import { BASE_URL } from './info.js';

await fetch(`${BASE_URL}`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            displayProducts(data);
        })
        .catch(error => console.log(error));

    function displayProducts(products) {

        const templateContent = productTemplate.content;

        products.forEach(product => {
            const productCard = templateContent.cloneNode(true);
            
            const productLinks = productCard.querySelectorAll('.product-link');
            const productImage = productCard.querySelector('.product-image');
            const productCategory = productCard.querySelector('.product-category');
            const productTitle = productCard.querySelector('.product-title');
            const productPrice = productCard.querySelector('.product-price');
            const btnAddCart = productCard.querySelector('.btn-add-cart');

            // Set the link href for all product links
            const productUrl = `product.htm?id=${product.id}`;
            productLinks.forEach(link => {
                link.href = productUrl;
            });
            
            productImage.src = product.image;
            productImage.alt = product.title;
            productCategory.textContent = product.category;
            productTitle.textContent = product.title;
            productPrice.textContent = `$${product.price.toFixed(2)}`;

            btnAddCart.addEventListener('click', (e) => {
                e.preventDefault();
                console.log('Add to cart clicked for:', product.title);
            });

            productsGrid.appendChild(productCard);
        });
    }
