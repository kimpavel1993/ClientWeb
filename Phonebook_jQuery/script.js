$(document).ready(function () {
    var secondNameTextField = $("#second-name-text-field");
    var firstNameTextField = $("#first-name-text-field");
    var phoneTextField = $("#phone-text-field");
    var table = $("#table");
    var secondNameError = $("#second-name-error-message");
    var firstNameError = $("#first-name-error-message");
    var phoneError = $("#phone-error-message");

    $("#add-button").click(function () {
        var secondNameText = secondNameTextField.val();
        var firstNameText = firstNameTextField.val();
        var phoneNameText = phoneTextField.val();

        if (secondNameText.trim().length === 0 || firstNameText.trim().length === 0 || phoneNameText.trim().length === 0) {
            if (secondNameText.trim().length === 0) {
                secondNameError.text("Заполните поле Фамилия");

                secondNameTextField.addClass("background-color-error");
            } else {
                secondNameError.text("");

                secondNameTextField.removeClass("background-color-error");
            }

            if (firstNameText.trim().length === 0) {
                firstNameError.text("Заполните поле Имя");

                firstNameTextField.addClass("background-color-error");
            } else {
                firstNameError.text("");

                firstNameTextField.removeClass("background-color-error");
            }

            if (phoneNameText.trim().length === 0) {
                phoneError.text("Заполните поле Номер телефона");

                phoneTextField.addClass("background-color-error");
            } else {
                phoneError.text("");

                phoneTextField.removeClass("background-color-error");
            }

            return;
        }

        secondNameError.text("");
        firstNameError.text("");
        phoneError.text("");

        secondNameTextField.removeClass("background-color-error");
        firstNameTextField.removeClass("background-color-error");
        phoneTextField.removeClass("background-color-error");

        var tableItem = $("<tbody></tbody>");

        tableItem.html("<tr><td><span class='index'></span></td><td><span class='second-name'></span></td><td><span class='first-name'></span></td><td><span class='phone'></span></td><td><button class='delete-button'>X</button></td></tr>");

        tableItem.find(".second-name").text(secondNameText);
        tableItem.find(".first-name").text(firstNameText);
        tableItem.find(".phone").text(phoneNameText);

        function setIndex() {
            table.find("tr").each(function (i) {
                $(this).find(".index").text(i);
            });
        }

        tableItem.find(".delete-button").click(function () {
            tableItem.remove();

            setIndex();
        });

        table.append(tableItem);

        setIndex();

        secondNameTextField.val("");
        firstNameTextField.val("");
        phoneTextField.val("");
    });
});