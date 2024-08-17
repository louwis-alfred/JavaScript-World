// Initialize variables
let input = prompt('What would you like to do?: '); 
const todos = ['Jogging','Coding'];

// While loop condition
while (input !== 'q' && input !== 'quit') {
    if (input === 'list') {
        console.log("Here's the list:")
        for (let i = 0; i < todos.length; i ++) {
            console.log(`${i}: ${todos[i]}`)
        }
    } else if (input === 'new') { // Add a new Todo
        const newTodo = prompt('Ok, What is the new to do?');
        todos.push(newTodo);
        console.log(`${newTodo} is added to the list`)
    } else if (input === 'delete') { // Delete a todo
        const indextoDelete = parseInt(prompt('Enter an index to delete: '));
        if (!Number.isNaN(indextoDelete)) { // Checks if the index is a valid number
            const deletedIndex = todos.splice(indextoDelete, 1);
            console.log(`${deletedIndex} has been deleted.`)
        } else {
            console.log('Unknown Index') // If a index is not a number 
        }
       
    }
    input = prompt('What would you like to do?: '); // Get new user input 
}

console.log('You quit the app') // Exit message
