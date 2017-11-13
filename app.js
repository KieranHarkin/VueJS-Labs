Vue.component("greeting", {
    template: "<p>Hi, I am {{name}}. <button @click='changeName'>Chnage Name</button></p>",
    data: function() {
        return {
            name: "Yoshi"
        }
    },
    methods: {
        changeName: function() {
            this.name = "Harko";
        }
    }
});

new Vue({
    el: "#vue-app-one",
})

new Vue({
    el: "#vue-app-two",
});