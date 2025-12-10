document.addEventListener('DOMContentLoaded', () => {
    // Get product ID from URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');

    if (!productId) {
        console.error('No product ID provided');
        window.location.href = 'products.htm';
        return;
    }

    // Fetch product details
    fetch(`https://fakestoreapi.com/products/${productId}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(product => {
            console.log('Product fetched:', product);
            displayProduct(product);
        })
        .catch(error => {
            console.error('Error fetching product:', error);
            document.querySelector('main').innerHTML = '<p>Error loading product. Please try again later.</p>';
        });


        /// the right way ?=??? im just updating information from PRODUCTS and passing it to this page via the url and if statements?
    function displayProduct(product) {
        // Update breadcrumb
        const productNameBreadcrumb = document.getElementById('productNameBreadcrumb');
        if (productNameBreadcrumb) {
            productNameBreadcrumb.textContent = product.title;
        }

        // Update product image
        const productImage = document.getElementById('productImage');
        if (productImage) {
            productImage.src = product.image;
            productImage.alt = product.title;
        }

        // Update product category
        const productCategory = document.getElementById('productCategory');
        if (productCategory) {
            productCategory.textContent = product.category;
        }

        // Update product title
        const productTitle = document.getElementById('productTitle');
        if (productTitle) {
            productTitle.textContent = product.title;
        }

        // Update product price
        const productPrice = document.getElementById('productPrice');
        if (productPrice) {
            productPrice.textContent = `$${product.price.toFixed(2)}`;
        }

        // Update product description
        const productDescription = document.getElementById('productDescription');
        if (productDescription) {
            productDescription.textContent = product.description;
        }

        // Add to cart button
        const btnAddToCart = document.getElementById('btnAddToCart');
        if (btnAddToCart) {
            btnAddToCart.addEventListener('click', () => {
                console.log('Add to cart clicked for:', product.title);
                // TODO: Implement add to cart functionality
            });
        }
    }
});

