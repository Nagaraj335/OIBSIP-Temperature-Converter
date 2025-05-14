// Function to handle temperature conversion
function convertTemperature() {
    const temperatureInput = parseFloat(document.getElementById("temperatureInput").value);
    const selectedUnit = document.querySelector('input[name="unit"]:checked').value;
    const resultArea = document.getElementById("result");

    // Validate the input to ensure it's a number
    if (isNaN(temperatureInput)) {
        resultArea.textContent = "Please enter a valid number.";
        return;
    }

    let result = "";

    // Perform conversion based on the selected unit
    if (selectedUnit === "Celsius") {
        const fahrenheit = (temperatureInput * 9 / 5) + 32;
        const kelvin = temperatureInput + 273.15;
        result = `${temperatureInput}°C = ${fahrenheit.toFixed(2)}°F = ${kelvin.toFixed(2)}K`;
    } else if (selectedUnit === "Fahrenheit") {
        const celsius = (temperatureInput - 32) * 5 / 9;
        const kelvin = celsius + 273.15;
        result = `${temperatureInput}°F = ${celsius.toFixed(2)}°C = ${kelvin.toFixed(2)}K`;
    } else if (selectedUnit === "Kelvin") {
        const celsius = temperatureInput - 273.15;
        const fahrenheit = (celsius * 9 / 5) + 32;
        result = `${temperatureInput}K = ${celsius.toFixed(2)}°C = ${fahrenheit.toFixed(2)}°F`;
    }

    // Display the result
    resultArea.textContent = result;
}

// Add event listener to the "Convert" button
document.getElementById("convertButton").addEventListener("click", convertTemperature);

// Add event listener for the "Enter" key
document.getElementById("temperatureInput").addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        convertTemperature();
    }
});