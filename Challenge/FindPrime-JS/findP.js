const array = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ,13]; 
        
function findPrime(n) {
    for (let i = 2; n > i; i++) {
        if (n % i == 0) {
            return false;
        }
    }
    return n > 1
}

console.log(array.filter(findPrime))


// ANSWER:  2, 3, 5, 7, 11, 13  
