document.addEventListener("DOMContentLoaded", function () {
    // noinspection ES6ConvertVarToLetConst
    var newCelsiusTextField = document.getElementById("celsius-text-field");
    // noinspection ES6ConvertVarToLetConst
    var newKelvinText = document.getElementById("kelvin-message-result");
    // noinspection ES6ConvertVarToLetConst
    var newFahrenheitText = document.getElementById("fahrenheit-message-result");
    // noinspection ES6ConvertVarToLetConst
    var errorMessage = document.getElementById("error-message");

    document.getElementById("convert-button").addEventListener("click", function () {
        if (isNaN(newCelsiusTextField.value) || newCelsiusTextField.value === "") {
            errorMessage.textContent = "Введите корректное значение"

            newKelvinText.textContent = "";
            newFahrenheitText.textContent = "";
            return;
        }

        errorMessage.textContent = "";

        newKelvinText.textContent = "Температура по градусам Кельвина: " + (parseFloat(newCelsiusTextField.value) + 273.15);
        newFahrenheitText.textContent = "Температура по градусам Фаренгейта: " + (parseFloat(newCelsiusTextField.value) * 1.8 + 32);

        newKelvinText.appendChild(newKelvinText);
        newFahrenheitText.appendChild(newKelvinText);
    });
});