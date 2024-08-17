// Function for calculating grades
const calculate = () => {
    // Getting user input
    let english = document.querySelector('#english').value;
    let math = document.querySelector('#math').value;
    let science = document.querySelector('#science').value;

    // Check if the values are empty. If they are, show "Please fill them in"
    if (english === "" || math === "" || science === "") {
        document.querySelector("#showdata").innerHTML = "Please fill in all the fields";
        return; // Exit the function if inputs are empty
    }

    // Convert input values to float
    let totalGrades = parseFloat(english) + parseFloat(math) + parseFloat(science);

    // Calculate percentage
    let percentage = (totalGrades / 300) * 100;

    // Determine final grade based on percentage
    let finalGrades = '';
    if (percentage <= 100 && percentage >= 95) {
        finalGrades = "Outstanding";
    } else if (percentage < 95 && percentage >= 90) {
        finalGrades = "Very Good";
    } else if (percentage < 90 && percentage >= 80) {
        finalGrades = "Good";
    } else {
        finalGrades = "Better luck next time!";
    }

    // Determine pass or fail status
    let passFailStatus;
    if (percentage >= 75) {
        passFailStatus = "Pass"
    } else {
        passFailStatus = "Failed"
    }

    // Display the results
    document.querySelector("#showgrade").innerHTML = `Percentage: ${percentage.toFixed(2)}%, Grade: ${finalGrades}`;
    document.querySelector("#showdata").innerHTML = `Status: ${passFailStatus}`;

};

// Clear the text fields
const clearFields = () => {
    document.querySelector("#english").value = "";
    document.querySelector("#math").value = "";
    document.querySelector("#science").value = "";
    document.querySelector("#showgrade").innerHTML = "";
    document.querySelector("#showdata").innerHTML = "";
}
