function runSurvey() {
    const data = createSurvey();
    displaySurvey(data);
}

function createSurvey() {
    const name = prompt("Введіть ваше ім’я:");
    const age = Number(prompt("Введіть ваш вік:"));
    const city = prompt("Введіть ваше місто:");
    const isAdult = age >= 18;

    return { name, age, city, isAdult };
}

function displaySurvey(data) {
    const resultDiv = document.getElementById("survey-result");
    const message = `
        <strong>Ім’я:</strong> ${data.name}<br>
        <strong>Вік:</strong> ${data.age}<br>
        <strong>Місто:</strong> ${data.city}<br>
        <strong>Повнолітній:</strong> ${data.isAdult ? "Так" : "Ні"}
    `;
    resultDiv.innerHTML = message;
}