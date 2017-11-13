new Vue({
    el: '#vue-app',
    data: {
        output: "Hello World"
    },
    methods: {
        readRefs: function() {
            console.log(this.$refs.input.value);
            this.output = this.$refs.input.value;
        }
    }
});