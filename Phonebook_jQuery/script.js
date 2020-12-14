$(document).ready(function () {
    // noinspection ES6ConvertVarToLetConst
    var secondNameTextField = $("#text-field-second-name");
    // noinspection ES6ConvertVarToLetConst
    var firstNameTextField = $("#text-field-first-name");
    // noinspection ES6ConvertVarToLetConst
    var phoneTextField = $("#text-field-phone");
    // noinspection ES6ConvertVarToLetConst
    var table = $("#table");
    // noinspection ES6ConvertVarToLetConst
    var secondNameErrorMessage = $("#error-message-second-name");
    // noinspection ES6ConvertVarToLetConst
    var firstNameErrorMessage = $("#error-message-first-name");
    // noinspection ES6ConvertVarToLetConst
    var phoneErrorMessage = $("#error-message-phone");

    $("#add-button").click(function () {
        // noinspection ES6ConvertVarToLetConst
        var secondNameText = secondNameTextField.val();
        // noinspection ES6ConvertVarToLetConst
        var firstNameText = firstNameTextField.val();
        // noinspection ES6ConvertVarToLetConst
        var phoneNameText = phoneTextField.val();
        // noinspection ES6ConvertVarToLetConst

        if (secondNameText === "" || firstNameText === "" || phoneNameText === "") {
            if (secondNameText === "") {
                secondNameErrorMessage.text("Заполните поле Фамилия");
                secondNameTextField.css({backgroundColor: "red"});
            } else {
                secondNameErrorMessage.text("");
                secondNameTextField.css({backgroundColor: "white"});
            }

            if (firstNameText === "") {
                firstNameErrorMessage.text("Заполните поле Имя");
                firstNameTextField.css({backgroundColor: "red"});
            } else {
                firstNameErrorMessage.text("");
                firstNameTextField.css({backgroundColor: "white"});
            }

            if (phoneNameText === "") {
                phoneErrorMessage.text("Заполните поле Номер телефона");
                phoneTextField.css({backgroundColor: "red"});
            } else {
                phoneErrorMessage.text("");
                phoneTextField.css({backgroundColor: "white"});
            }

            return;
        }

        secondNameErrorMessage.text("");
        firstNameErrorMessage.text("");
        phoneErrorMessage.text("");

        secondNameTextField.css({backgroundColor: "white"});
        firstNameTextField.css({backgroundColor: "white"});
        phoneTextField.css({backgroundColor: "white"});

        // noinspection ES6ConvertVarToLetConst
        var tableItem = $("<tbody><tr></tr></tbody>");

        tableItem.html("<td><span class = 'index'></span></td><td><span class = 'second-name'></span></td><td><span class = 'first-name'></span></td><td><span class = 'phone'></span></td><td><button class ='delete-button'>X</button></td>");

        tableItem.find(".second-name").text(secondNameText);
        tableItem.find(".first-name").text(firstNameText);
        tableItem.find(".phone").text(phoneNameText);
        tableItem.each(function (i) {
            $(this).find(".index").text(i + 1);
        });

        tableItem.find(".delete-button").click(function () {
            tableItem.remove();
        });

        table.append(tableItem);

        secondNameTextField.val("");
        firstNameTextField.val("");
        phoneTextField.val("");
    });
});