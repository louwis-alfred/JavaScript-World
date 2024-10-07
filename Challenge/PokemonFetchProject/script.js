
const inputElement = document.getElementById('pokemonName');
const fetchButton = document.getElementById('fetchButton');
inputElement.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        fetchData();
    }
})
fetchButton.addEventListener('click', fetchData);

async function fetchData() {
    try {
        const inputElement = document.getElementById('pokemonName');
        const pokemonName = inputElement.value.trim().toLowerCase();

        // Input Validation
        if (pokemonName === "") {
            alert("Please enter a Pokémon name.");
            return;
        }

        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

        if (!response.ok) {
            throw new Error('Could not fetch resource. Please check the Pokémon name and try again.');
        }

        const data = await response.json();

        // Create elements to display the data
        const output = document.getElementById('output');
        output.innerHTML = ''; // Clear previous output

        const pokemonDetails = document.createElement('div');

        // Pokémon Name
        const nameLabel = document.createElement('p');
        nameLabel.textContent = `Name: ${capitalizeFirstLetter(data.name)}`;
        pokemonDetails.appendChild(nameLabel);

        // Pokémon Types (handles multiple types)
        const types = data.types.map(typeInfo => capitalizeFirstLetter(typeInfo.type.name)).join(', ');
        const typeLabel = document.createElement('p');
        typeLabel.textContent = `Type: ${types}`;
        pokemonDetails.appendChild(typeLabel);

        // Pokémon Weight
        const weightLabel = document.createElement('p');
        weightLabel.textContent = `Weight: ${data.weight}`;
        pokemonDetails.appendChild(weightLabel);

        // Pokémon Height
        const heightLabel = document.createElement('p');
        heightLabel.textContent = `Height: ${data.height}`;
        pokemonDetails.appendChild(heightLabel);

        // Append all details to the output div
        output.appendChild(pokemonDetails);

    } catch (error) {
        console.error('Error:', error);
        alert(error.message);
    }
}

// Function to capitalize the first letter of a string
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
