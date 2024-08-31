// Reference: https://dev.to/cammanhhoang/what-is-promise-in-javascript-with-real-world-example-dkb
const myPromise = new Promise((resolve, reject) => {
    // Asynchronous operation
    setTimeout(() => {
      const data = "Promise resolved successfully!";
      resolve(data); // Fulfill the Promise
      // Or reject the Promise
      // reject(new Error("An error occurred")); 
    }, 2000);
  });
  
  myPromise
    .then(result => {
      console.log("Promise fulfilled:", result);
    })
    .catch(error => {
      console.error("Promise rejected:", error);
    });