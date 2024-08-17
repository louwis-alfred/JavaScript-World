const bodyEl = document.querySelector("body");

bodyEl.addEventListener("mousemove", (event) => {
    // Create a new span element
    const spanEl = document.createElement("span");
    
    // Set random size
    const size = Math.random() * 100 + 20; // Random size between 20px and 120px
    spanEl.style.width = `${size}px`;
    spanEl.style.height = `${size}px`;

    // Set the rest of the styles
    spanEl.style.position = 'absolute';
    spanEl.style.background = 'url("https://cdn2.iconfinder.com/data/icons/free-1/128/Love__heart_like-256.png")';
    spanEl.style.backgroundSize = 'cover';
    spanEl.style.left = `${event.clientX - size / 2}px`; // Center the span at the cursor position
    spanEl.style.top = `${event.clientY - size / 2}px`; // Center the span at the cursor position
    spanEl.style.point_erEvents = 'none';
    spanEl.style.transform = 'translate(-50%, -50%)';
    spanEl.style.animation = 'animate 6s linear';

    // Append the span element to the body
    bodyEl.appendChild(spanEl);

    // Remove the span element after the animation ends
    setTimeout(() => {
        spanEl.remove();
        
    }, 6000); // Match the duration of the animation
});
