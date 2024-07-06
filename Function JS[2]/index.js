function greet(word) {
    console.log(word);
    let elements = document.getElementsByClassName("text");
    for (var i = 0; i < elements.length; i++) {
        elements[i].textContent = word;
    }
}