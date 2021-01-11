new Vue({
    el: '#app',
    data: {
        message: "Hello Vue!",
        age: 23
    },

    methods: {
        changeMessage: function () {
            this.message = this.message.indexOf("Hello") >= 0 ? "Buy, Vue" : "Hello Vue!";
        }
    }
})