fetch("https://swapi.dev/api/people/1/")
    .then(response => {
        console.log('Resolved',  response);
    })
    .catch(error => {
        console.log("Error",  error);
    })