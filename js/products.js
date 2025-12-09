

    fetch('https://fakestoreapi.com/products')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log('Products fetched:', data);
            displayProducts(data);
        })
        .catch(error => {
            console.error('Error fetching products:', error);
            productsGrid.innerHTML = '<p>Error loading products. Please try again later.</p>';
        });

    function displayProducts(products) {

        productsGrid.innerHTML = '';

        const templateContent = productTemplate.content;

        products.forEach(product => {
            const productCard = templateContent.cloneNode(true);
            
            const productImage = productCard.querySelector('.product-image');
            const productCategory = productCard.querySelector('.product-category');
            const productTitle = productCard.querySelector('.product-title');
            const productPrice = productCard.querySelector('.product-price');
            const btnAddQuantity = productCard.querySelector('.btn-add-quantity');
            const btnAddCart = productCard.querySelector('.btn-add-cart');

            productImage.src = product.image;
            productImage.alt = product.title;
            productCategory.textContent = product.category;
            productTitle.textContent = product.title;
            productPrice.textContent = `$${product.price.toFixed(2)}`;

            btnAddQuantity.addEventListener('click', () => {
                console.log('Add quantity clicked for:', product.title);
            });

            btnAddCart.addEventListener('click', () => {
                console.log('Add to cart clicked for:', product.title);
            });

            productsGrid.appendChild(productCard);
        });
    };

