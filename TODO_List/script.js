document.addEventListener("DOMContentLoaded", function () {
    // noinspection ES6ConvertVarToLetConst
    var textField = document.getElementById("text-field");
    // noinspection ES6ConvertVarToLetConst
    var list = document.getElementById("list");
    // noinspection ES6ConvertVarToLetConst
    var errorMessage = document.getElementById("error-message");

    document.getElementById("add-button").addEventListener("click", function () {
        // noinspection ES6ConvertVarToLetConst
        var text = textField.value;

            if (text === "") {
                errorMessage.textContent = "Введите текст";
                return;
            }

            errorMessage.textContent = "";

        // noinspection ES6ConvertVarToLetConst
        var listItem = document.createElement("li");

        function setViewMode() {
            listItem.innerHTML = "<span class='text'></span><button class='edit-button' type='button'>Редактировать</button><button class='delete-button' type='button'>Удалить</button>";

            listItem.querySelector(".edit-button").addEventListener("click", function () {
                listItem.innerHTML = "<input class='edit-text' /><button class='save-button' type='button'>Сохранить</button><button class='cancel-button' type='button'>Отменить</button>";

                listItem.querySelector(".edit-text").value = text;

                listItem.querySelector(".save-button").addEventListener("click", function () {
                    if (listItem.querySelector(".edit-text").value === "") {
                        errorMessage.textContent = "Введите текст";
                        return;
                    }

                    text = listItem.querySelector(".edit-text").value;

                    errorMessage.textContent = "";

                    setViewMode();
                });

                listItem.querySelector(".cancel-button").addEventListener("click", function () {
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