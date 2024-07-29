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



const array2 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ,13];

function findPrime(n) {
    if (n <= 1) return false;
    if (n === 2) return true;
    for (let i = 2; i <= Math.sqrt(n); i ++) {
        if (n % i === 0){
            return false;
        }

    }

    return true;
}
console.log(array2.filer(findPrime))
