// DOM elements
var age = document.getElementById("age");
var height = document.getElementById("height");
var weight = document.getElementById("weight");

// Add click event listeners to gender options
document.getElementById("maleOption").addEventListener("click", function() { selectGender("male"); });
document.getElementById("femaleOption").addEventListener("click", function() { selectGender("female"); });

function selectGender(gender) {
    // Reset border color of previously selected option (if any)
    const selectedOption = document.querySelector('.gender.selected');
    if (selectedOption) {
        selectedOption.classList.remove('selected');
    }

    // Find the clicked gender option by ID
    const option = document.getElementById(`${gender}Option`);
    // Add 'selected' class to highlight the selected option
    option.classList.add('selected');

    document.getElementById(gender).checked = true;

    // Example of extracting information (you can adjust as per your specific need)
    console.log(`Selected gender: ${gender}`);
}

function validateform() {
    var ageValue = age.value.trim();
    var heightValue = height.value.trim();
    var weightValue = weight.value.trim();
    var gender = document.querySelector('input[name="gender"]:checked');

    // Check if any field is empty
    if (ageValue === "" || heightValue === "" || weightValue === "" || !gender) {
        alert("All fields are required!");
        return false; // Prevent form submission
    }

    if (isNaN(ageValue) || isNaN(heightValue) || isNaN(weightValue)) {
        alert("Please enter numbers only in Age, Height, and Weight fields.");
        return false; // Prevent form submission
    }

    return true; // Allow form submission if all fields are valid
}

document.getElementById("form").addEventListener("submit", function(event) {
    event.preventDefault();
    if (validateform()) {
        calculateBMI();
    }
});

document.getElementById("submit").addEventListener("click", validateForm);
function countBmi() {
    var p = [age.value, height.value, weight.value];
    if (male.checked) {
        p.push("male");
    } else if (female.checked) {
        p.push("female");
    }
    form.reset();
    var bmi = Number(p[2]) / (((Number(p[1]) / 100) * Number(p[1])) / 100);
    var result = "";
    if (bmi < 18.5) {
        result = "Underweight";
    } else if (18.5 <= bmi && bmi <= 24.9) {
        result = "Healthy";
    } else if (25 <= bmi && bmi <= 29.9) {
        result = "Overweight";
    } else if (30 <= bmi && bmi <= 34.9) {
        result = "Obese";
    } else if (35 <= bmi) {
        result = "Extremely obese";
    }
    
    var h1 = document.createElement("h1");
    var h2 = document.createElement("h2");
    var t = document.createTextNode(result);
    var b = document.createTextNode("BMI: ");
    var r = document.createTextNode(parseFloat(bmi).toFixed(2));
    h1.appendChild(t);
    h2.appendChild(b);
    h2.appendChild(r);
    document.body.appendChild(h1);
    document.body.appendChild(h2);
    document.getElementById("submit").removeEventListener("click", countBmi);
    document
        .getElementById("submit")
        .removeEventListener("click", validateForm);
}
document.getElementById("submit").addEventListener("click", countBmi);