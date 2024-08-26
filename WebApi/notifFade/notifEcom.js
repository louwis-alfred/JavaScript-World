const addToCartButton = document.getElementById('addToCartButton');
const notification = document.getElementById('notification');

addToCartButton.addEventListener('click', () => {
    // Show the notification
    notification.style.display = 'block';

    // Hide the notification after 3 seconds
    setTimeout(() => {
        notification.style.display = 'none';
    }, 3000);
});