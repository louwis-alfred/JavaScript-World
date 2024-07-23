let input = prompt('What would you like to do?: ');
const todos = ['Jogging','Coding'];
while (input !== 'q' && input !== 'quit') {
    if (input === 'list') {
        console.log("Here's the list:")
        for (let i = 0; i < todos.length; i ++) {
            console.log(`${i}: ${todos[i]}`)
        }
    } else if (input === 'new') {
        const newTodo = prompt('Ok, What is the new to do?');
        todos.push(newTodo);
        console.log(`${newTodo} is added to the list`)
    } else if (input === 'delete') {
        const indextoDelete = parseInt(prompt('Enter an index to delete: '));
        if (!Number.isNaN(indextoDelete)) {
            const deletedIndex = todos.splice(indextoDelete, 1);
            console.log(`${deletedIndex} has been deleted.`)
        } else {
            console.log('Unknown Index')
        }
       
    }
    input = prompt('What would you like to do?: ');
}

console.log('You quit the app')
