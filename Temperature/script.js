document.addEventListener("DOMContentLoaded", function () {
    // noinspection ES6ConvertVarToLetConst
    var celsiusTextField = document.getElementById("celsius-text-field");
    // noinspection ES6ConvertVarToLetConst
    var kelvinTemperature = document.getElementById("result-kelvin-message");
    // noinspection ES6ConvertVarToLetConst
    var fahrenheitTemperature = document.getElementById("result-fahrenheit-message");
    // noinspection ES6ConvertVarToLetConst
    var error = document.getElementById("error-message");

    document.getElementById("convert-button").addEventListener("click", function () {
        if (isNaN(celsiusTextField.value) || celsiusTextField.value.trim().length === 0) {
            error.textContent = "Введите корректное значение";

            kelvinTemperature.textContent = "";
            fahrenheitTemperature.textContent = "";
            return;
        }

        error.textContent = "";

        kelvinTemperature.textContent = "Температура в градусах Кельвина: " + (parseFloat(celsiusTextField.value) + 273.15);
        fahrenheitTemperature.textContent = "Температура по градусам Фаренгейта: " + (parseFloat(celsiusTextField.value) * 1.8 + 32);
    });
});