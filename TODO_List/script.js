document.addEventListener("DOMContentLoaded", function () {
    var textField = document.getElementById("text-field");
    var list = document.getElementById("list");
    var error = document.getElementById("error-message");

    document.getElementById("add-button").addEventListener("click", function () {
        var text = textField.value;

        if (text.trim().length === 0) {
            error.textContent = "Введите текст";

            return;
        }

        error.textContent = "";

        var listItem = document.createElement("li");

        function setViewMode() {
            listItem.innerHTML = "<span class='text'></span><button class='edit-button' type='button'>Редактировать</button><button class='delete-button' type='button'>Удалить</button>";

            listItem.querySelector(".edit-button").addEventListener("click", function () {
                listItem.innerHTML = "<input class='edit-text' /><button class='save-button' type='button'>Сохранить</button><button class='cancel-button' type='button'>Отменить</button>";

                listItem.querySelector(".edit-text").value = text;

                listItem.querySelector(".save-button").addEventListener("click", function () {
                    if (listItem.querySelector(".edit-text").value.trim().length === 0) {
                        error.textContent = "Введите текст";

                        return;
                    }

                    error.textContent = "";

                    text = listItem.querySelector(".edit-text").value;

                    setViewMode();
                });

                listItem.querySelector(".cancel-button").addEventListener("click", function () {
                    error.textContent = "";

                    setViewMode();
                });
            });

            listItem.querySelector(".text").textContent = text;

            listItem.querySelector(".delete-button").addEventListener("click", function () {
                listItem.parentNode.removeChild(listItem);
            });
        }

        setViewMode();

        list.prepend(listItem);

        textField.value = "";
    });
});