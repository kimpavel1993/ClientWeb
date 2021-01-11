function get(url, data) {
    return $.get(url, data);
}

function post(url, data) {
    return $.post({
        url: url,
        contentType: "application/json",
        data: JSON.stringify(data)
    });
}

function PhoneBookService() {
    this.baseUrl = "/api/";

    this.getContacts = function (term) {
        return get(this.baseUrl + "getContacts", {term: term});
    };

    this.createContact = function (contact) {
        return post(this.baseUrl + "createContact", {contact: contact});
    };

    this.deleteContact = function (id) {
        return post(this.baseUrl + "deleteContact", {id: id});
    };
}

Vue.component("modal", {
    template: "#modal-template",

    data: function () {
        return {
            onSaveEdit: null
        }
    },

    methods: {
        show: function (onSaveEdit) {
            this.onSaveEdit = onSaveEdit;

            $(this.$refs.modal).modal("show");
        },

        saveEdit: function () {
            this.onSaveEdit();

            $(this.$refs.modal).modal("hide");
        }
    }
});

new Vue({
    el: "#app",

    data: {
        contacts: [],
        secondName: "",
        firstName: "",
        phone: "",
        term: "",
        secondNameErrorMessage: "",
        firstNameErrorMessage: "",
        phoneErrorMessage: "",
        service: new PhoneBookService()
    },

    created: function () {
        this.loadContacts();
    },

    methods: {
        loadContacts: function () {
            var self = this;

            this.service.getContacts(this.term).done(function (response) {
                self.contacts = response;
            }).fail(function () {
                alert("Не удалось загрузить список контактов");
            });
        },

        clearSearch: function () {
            this.term = "";
            this.loadContacts();
        },

        addContact: function () {
            if (this.secondName.trim().length === 0 || this.firstName.trim().length === 0 || this.phone.trim().length === 0) {

                if (this.secondName.trim().length === 0) {
                    this.secondNameErrorMessage = "Заполните поле Фамилия";
                } else {
                    this.secondNameErrorMessage = "";
                }

                if (this.firstName.trim().length === 0) {
                    this.firstNameErrorMessage = "Заполните поле Имя";
                } else {
                    this.firstNameErrorMessage = "";
                }

                if (this.phone.trim().length === 0) {
                    this.phoneErrorMessage = "Заполните поле Номер телефона";
                } else {
                    this.phoneErrorMessage = "";
                }

                return;
            }

            this.secondNameErrorMessage = "";
            this.firstNameErrorMessage = "";
            this.phoneErrorMessage = "";

            var contact = {
                secondName: this.secondName,
                firstName: this.firstName,
                phone: this.phone
            };

            var self = this;

            this.service.createContact(contact).done(function (response) {
                if (!response.success) {
                    alert(response.message);

                    return;
                }

                self.secondName = "";
                self.firstName = "";
                self.phone = "";

                self.loadContacts();
            }).fail(function () {
                alert("Не удалось создать контакт");
            });
        },

        deleteContact: function (contact) {
            var self = this;

            this.$refs.confirmDeleteDialog.show(function () {
                self.service.deleteContact(contact.id).done(function (response) {
                    if (!response.success) {
                        alert(response.message);

                        return;
                    }

                    self.loadContacts();
                }).fail(function () {
                    alert("Не удалось удалить контакт");
                });
            });
        }
    }
});