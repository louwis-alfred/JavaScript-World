function calculateDiscount(price, discountPercentage) {
    return price - (price * discountPercentage / 100)
}

// Example of function call 

let originalPrice = 100; // Original price of Product
let discount = 20; // Discount percentage (20%)

// Calculating the discounted price

let discountedPrice = calculateDiscount(originalPrice, discount);

// Printing the result 

console.log(`Original Price ${originalPrice}, Discounted Price: ${discountedPrice}`)