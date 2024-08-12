const listItems = document.querySelectorAll('li');

for (let i = 0; i < listItems.length; i++) {
    listItems[i].classList.toggle('highlight')
}