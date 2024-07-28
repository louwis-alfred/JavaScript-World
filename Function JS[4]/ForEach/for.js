const nums = [9,8,7,6,5,4,3,2,1];

nums.forEach(function (n) {
    console.log(n * n)
    // prints: 81, 64, 49, 36, 25, 16, 9, 4, 1
});

nums.forEach(function (el) {
    if (el % 2 === 0) {
        console.log(el)
        // prints : 8, 6, 4, 2
    }
});