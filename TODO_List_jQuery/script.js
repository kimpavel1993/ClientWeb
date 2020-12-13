$(document).ready(function () {
    // noinspection ES6ConvertVarToLetConst
    var textField = $("#text-field");
    // noinspection ES6ConvertVarToLetConst
    var list = $("#list");
    // noinspection ES6ConvertVarToLetConst
    var errorMessage = $("#error-message");


    $(document).click(function () {
        // noinspection ES6ConvertVarToLetConst
        var text = textField.val();

        if (text === "") {
            errorMessage.text("Введите текст");
            return;
        }

        errorMessage.text("");

        // noinspection ES6ConvertVarToLetConst
        var listItem = $("<li>");

        function setViewMode() {

            listItem.html("<span class='text'></span><button class='edit-button' type='button'>Редактировать</button><button class='delete-button' type='button'>Удалить</button>");

            listItem.find(".edit-button").click(function () {
                listItem.html("<input class='edit-text' /><button class='save-button' type='button'>Сохранить</button><button class='cancel-button' type='button'>Отменить</button>");

                listItem.find(".edit-text").val(text);

                listItem.find(".save-button").click(function () {
                    text = listItem.find(".edit-text").val();

                    setViewMode();
                });

                listItem.find(".cancel-button").click(function () {
                    setViewMode();
                });
            });

            listItem.find(".text").text(text);

            listItem.find(".delete-button").click(function () {
                listItem.remove();
            });
        }

        setViewMode();

        list.prepend(listItem);

        textField.val("");
    });
});