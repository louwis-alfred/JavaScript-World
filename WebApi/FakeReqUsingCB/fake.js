const fakeRequestCallback = (url, success, failure) => {
    const delay = Math.floor(Math.random() * 4500) + 500;
    setTimeout(() => {
        if (delay > 4000) {
            failure('Connection Timeout :'); // Callback function for failure
        } else {
            success(`Here's your fake data from ${url}`); // Callback function for success
        }
    }, delay);
}

// Example
fakeRequestCallback('books.com/page1', 
    // Success callback for the first request
    function(response) {
        console.log('It worked!');
        console.log(response);

        // This is another callback within the success callback of the first request
        fakeRequestCallback('books.com/page2', 
            // Success callback for the second request
            function(response) {
                console.log('First request success');
                console.log(response);
            }, 
            // Failure callback for the second request
            function(err) {
                console.log('Second request failed', err);
            }
        );
    }, 
    // Failure callback for the first request
    function(err) {
        console.log(err);
    }
);
