document.addEventListener('DOMContentLoaded', () => {
    const cart = {
        items: [],
        total: 0,
    };

    const updateCart = () => {
        const cartTotalElement = document.querySelector('.cart-total');
        const cartItemsElement = document.querySelector('.item-number');

        cartTotalElement.textContent = `$${cart.total.toFixed(2)}`;
        cartItemsElement.textContent = cart.items.length;
    };

    const addToCart = (id, price) => {
        cart.items.push({ id, price });
        cart.total += price;
        updateCart();
    };

    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', () => {
            const productElement = button.closest('.product');
            const productId = parseInt(productElement.getAttribute('data-id'));
            const productPrice = parseFloat(productElement.getAttribute('data-price'));

            addToCart(productId, productPrice);
        });
    });

    const trigger = document.querySelector('.trigger');
    const mobileMenu = document.querySelector('nav.mobile-hide');
    trigger.addEventListener('click', () => {
        mobileMenu.classList.toggle('mobile-hide');
    });

    const dropdowns = document.querySelectorAll('.arrow-icon');
    dropdowns.forEach(dropdown => {
        dropdown.addEventListener('click', () => {
            const submenu = dropdown.nextElementSibling;
            submenu.classList.toggle('show');
        });
    });
});