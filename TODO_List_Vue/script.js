Vue.component("todo-list", {
    data: function () {
        return {
            items: [],
            newTodoText: "",
            newId: 1,
            errorMessage: ""
        };
    },

    template: "#todo-list-template",

    methods: {
        addNewTodoItem: function () {
            var text = this.newTodoText;

            if (text.trim().length === 0) {
                this.errorMessage = "Введите текст"

                return;
            }

            this.items.push({
                id: this.newId,
                text: text
            });

            this.errorMessage = ""
            this.newTodoText = "";
            
            this.newId++;
        },

        deleteItem: function (item) {
            this.items = this.items.filter(function (x) {
                return x !== item;
            });
        },

        saveItem: function (item, newText) {
            item.text = newText
        }
    }
});

Vue.component("todo-list-item", {
    props: {
        item: {
            type: Object,
            required: true
        }
    },

    data: function () {
        return {
            isEditing: false,
            editText: "",
            hasError: false,
            isCorrect: true,
        };
    },

    template: "#todo-list-item-template",

    methods: {
        startEditItem: function () {
            this.editText = this.item.text;
            this.isEditing = true;
        },

        deleteItem: function () {
            this.$emit("delete-item", this.item)
        },

        saveItem: function () {
            if (this.editText.trim().length !== 0) {
                this.hasError = false;
                this.isCorrect = true;
                this.isEditing = false;

                this.$emit("save-item", this.item, this.editText)
            } else {
                this.hasError = true;
                this.isCorrect = false;
            }
        },

        cancelEditItem: function () {
            this.isCorrect = true;
            this.hasError = false;
            this.isEditing = false;
        }
    }
});

new Vue({
    el: "#app",
});