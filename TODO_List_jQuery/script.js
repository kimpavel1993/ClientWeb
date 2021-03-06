$(document).ready(function () {
    var textField = $("#text-field");
    var list = $("#list");
    var error = $("#error-message");

    $("#add-button").click(function () {
        var text = textField.val();

        if (text.trim().length === 0) {
            error.text("Введите текст");

            return;
        }

        error.text("");

        var listItem = $("<li>");

        function setViewMode() {
            listItem.html("<span class='text'></span><button class='edit-button' type='button'>Редактировать</button><button class='delete-button' type='button'>Удалить</button>");

            listItem.find(".edit-button").click(function () {
                listItem.html("<input class='edit-text' /><span class='edit-error-message'></span><button class='save-button' type='button'>Сохранить</button><button class='cancel-button' type='button'>Отменить</button>");

                listItem.find(".edit-text").val(text);

                listItem.find(".save-button").click(function () {
                    if (listItem.find(".edit-text").val().trim().length === 0) {
                      listItem.find(".edit-error-message").text("Введите текст")

                        return;
                    }

                    listItem.find(".edit-error-message").text("");

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