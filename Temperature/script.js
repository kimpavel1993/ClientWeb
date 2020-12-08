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
        // noinspection ES6ConvertVarToLetConst
        var kelvinTextResult = document.getElementById("kelvin-message-result")

        // noinspection ES6ConvertVarToLetConst
        var fahrenheitTextResult = document.getElementById("fahrenheit-message-result")

        if (isNaN(newCelsiusTextField.value) || newCelsiusTextField.value === "") {
            errorMessage.textContent = "Введите корректное значение"

            kelvinTextResult.textContent = "";
            fahrenheitTextResult.textContent = "";
            return;
        }

        kelvinTextResult.textContent = "Температура по градусам Кельвина: " + (parseFloat(newCelsiusTextField.value) + 273.15);
        fahrenheitTextResult.textContent = "Температура по градусам Фаренгейта: " + (parseFloat(newCelsiusTextField.value) * 1.8 + 32);

        newKelvinText.appendChild(kelvinTextResult);
        newFahrenheitText.appendChild(fahrenheitTextResult);
    });
});