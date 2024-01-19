//script.js
document.addEventListener('DOMContentLoaded', function () {
    const cartItemsContainer = document.getElementById('cart-items');
    const productButtons = document.querySelectorAll('.product button');

    productButtons.forEach(button => {
        button.addEventListener('click', addToCart);
    });

    function addToCart() {
        const product = this.parentElement;
        const productName = product.querySelector('h2').innerText;

        // Cek apakah item sudah ada di keranjang
        if (isItemInCart(productName)) {
            alert('Item is already in your shopping cart.');
        } else {
            const productClone = product.cloneNode(true);
            const removeButton = document.createElement('button');
            removeButton.textContent = 'Remove from Cart';
            removeButton.addEventListener('click', removeFromCart);

            productClone.appendChild(removeButton);
            cartItemsContainer.appendChild(productClone);

            alert('Item has been added to your shopping cart.');
        }
    }

    function removeFromCart() {
        const product = this.parentElement;
        cartItemsContainer.removeChild(product);
    }

    function isItemInCart(itemName) {
        const cartItems = cartItemsContainer.querySelectorAll('.product h2');
        for (const item of cartItems) {
            if (item.innerText === itemName) {
                return true;
            }
        }
        return false;
    }
});
