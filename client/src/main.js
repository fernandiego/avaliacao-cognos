require("./main.css")

const Vue = require("vue")
const vueMaterial = require("vue-material")

Vue.use(vueMaterial)

new Vue({
    el: "#app",
    render: r => r(require("./main.vue"))
})