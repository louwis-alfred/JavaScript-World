const container = document.getElementById('container');

for (let i = 1; i <= 100; i++) {
    // Create a element Button
    const button = document.createElement('button');

    // Text inside of button
    button.innerText = 'Hey!';
    
    // Append the button inside of container 
    container.appendChild(button);
}