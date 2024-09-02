const fakeRequest = (url) => {
    return new Promise((resolve, reject) => {  // The promise takes resolve and reject as parameters
        const randNum = Math.random();
        setTimeout(() => {
            if (randNum < 0.7) {
                resolve('Your fake data is here');  // Call resolve if the request is successful
            } else {
                reject('Request error');  // Call reject if the request fails
            }
        }, 1000);
    });
}

fakeRequest('/dogs/1')
.then((data) => {  // This will be called with the value passed to resolve
    console.log(data);
}) 
.catch((err) => {  // This will be called with the value passed to reject
    console.log(err);
})
