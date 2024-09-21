const req = new XMLHttpRequest();


// This is a Error handling, this will run if there's no error
req.onload = function() {
    console.log('Successfully loaded');
    const data = JSON.parse(this.responseText);
    // After we parsed the json, we can now access the key values
    console.log(data.name);
    // console.log(data);
}
// And this will run if there's no error
req.onerror = function() {
    console.log("Error");
    console.log(this);
}

req.open("GET", "https://swapi.dev/api/people/1/")
req.send();
