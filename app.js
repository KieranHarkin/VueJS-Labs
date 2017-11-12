new Vue({
    el: "#vue-app",
    data: {
        name: "",
        job: "Developer",
        age: "",
        x: 0,
        y: 0
    },
    methods: {
        greet: function(time) {
            return "Good " + time + " " + this.name
        },
        add: function(year) {
            this.age += year;
        },
        subtract: function(year) {
            this.age += year;
        },
        updateXY: function(event) {
            console.log(event);
            this.x = event.offsetX;
            this.y = event.offsetY;
        },
        logName: function() {
            console.log("Enetered name");
        },
        logAge: function() {
            console.log("Age entered");
        }
    }
});