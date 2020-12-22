$(document).ready(function () {
    // noinspection ES6ConvertVarToLetConst
    var secondNameTextField = $("#second-name-text-field");
    // noinspection ES6ConvertVarToLetConst
    var firstNameTextField = $("#first-name-text-field");
    // noinspection ES6ConvertVarToLetConst
    var phoneTextField = $("#phone-text-field");
    // noinspection ES6ConvertVarToLetConst
    var table = $("#table");
    // noinspection ES6ConvertVarToLetConst
    var secondNameError = $("#second-name-error-message");
    // noinspection ES6ConvertVarToLetConst
    var firstNameError = $("#first-name-error-message");
    // noinspection ES6ConvertVarToLetConst
    var phoneError = $("#phone-error-message");

    $("#add-button").click(function () {
        // noinspection ES6ConvertVarToLetConst
        var secondNameText = secondNameTextField.val();
        // noinspection ES6ConvertVarToLetConst
        var firstNameText = firstNameTextField.val();
        // noinspection ES6ConvertVarToLetConst
        var phoneNameText = phoneTextField.val();
        // noinspection ES6ConvertVarToLetConst

        if (secondNameText.trim().length === 0 || firstNameText.trim().length === 0 || phoneNameText.trim().length === 0) {
            if (secondNameText.trim().length === 0) {
                secondNameError.text("Заполните поле Фамилия");

                secondNameTextField.css({backgroundColor: "red"});
            } else {
                secondNameError.text("");

                secondNameTextField.css({backgroundColor: "white"});
            }

            if (firstNameText.trim().length === 0) {
                firstNameError.text("Заполните поле Имя");

                firstNameTextField.css({backgroundColor: "red"});
            } else {
                firstNameError.text("");

                firstNameTextField.css({backgroundColor: "white"});
            }

            if (phoneNameText.trim().length === 0) {
                phoneError.text("Заполните поле Номер телефона");

                phoneTextField.css({backgroundColor: "red"});
            } else {
                phoneError.text("");

                phoneTextField.css({backgroundColor: "white"});
            }

            return;
        }

        secondNameError.text("");
        firstNameError.text("");
        phoneError.text("");

        secondNameTextField.css({backgroundColor: "white"});
        firstNameTextField.css({backgroundColor: "white"});
        phoneTextField.css({backgroundColor: "white"});

        // noinspection ES6ConvertVarToLetConst
        var tableItem = $("<tbody></tbody>");

        tableItem.html("<tr><td><span class = 'index'></span></td><td><span class = 'second-name'></span></td><td><span class = 'first-name'></span></td><td><span class = 'phone'></span></td><td><button class ='delete-button'>X</button></td></tr>");

        tableItem.find(".second-name").text(secondNameText);
        tableItem.find(".first-name").text(firstNameText);
        tableItem.find(".phone").text(phoneNameText);

        tableItem.find(".delete-button").click(function () {
            tableItem.remove();
        });

        table.append(tableItem);

        table.find("tr").each(function (i) {
            $(this).find(".index").text(i);
        });

        secondNameTextField.val("");
        firstNameTextField.val("");
        phoneTextField.val("");
    });
});