"use strict";

function runConverter() {
    const input = prompt("Введіть температуру:");
    if (input === null) {
        alert("Скасовано!");
        return;
    }

    const sanitizedInput = input.replace(/,/g, '.');
    const temperature = parseFloat(sanitizedInput);

    if (isNaN(temperature)) {
        alert("Будь ласка, введіть число!");
        return;
    }

    const direction = prompt("Напрямок конвертації (С to F або F to C):").toLowerCase();
    const result = convertTemperature(temperature, direction);
    
    const resultDiv = document.getElementById("converter-result");
    resultDiv.innerHTML = `<strong>Результат:</strong> ${result}`;
}

function createConverter(baseFactor, offset) {
    return (value) => value * baseFactor + offset;
}

const celsiusToFahrenheit = createConverter(9/5, 32);
const fahrenheitToCelsius = createConverter(5/9, -32 * 5/9);

function convertTemperature(value, direction) {
    const normalizedDirection = direction.trim().toLowerCase();

    if (normalizedDirection === "с to f" || normalizedDirection === "c to f") {
        const convertedValue = celsiusToFahrenheit(value);
        return formatResult(value, "°C", convertedValue, "°F");
    } else if (normalizedDirection === "f to c" || normalizedDirection === "f to с") {
        const convertedValue = fahrenheitToCelsius(value);
        return formatResult(value, "°F", convertedValue, "°C");
    } else {
        return "Невірний напрямок! Будь ласка, введіть 'С to F' або 'F to C'.";
    }
}

function formatResult(inputValue, inputUnit, outputValue, outputUnit) {
    const formattedInput = Number.isInteger(inputValue) ? inputValue : inputValue.toFixed(2);
    const formattedOutput = Number.isInteger(outputValue) ? outputValue : outputValue.toFixed(2);
    return `${formattedInput}${inputUnit} = ${formattedOutput}${outputUnit}`;
}