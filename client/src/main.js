require("./main.css")

const Vue = require("vue")
const vueMaterial = require("vue-material")

Vue.use(vueMaterial)

Vue.material.registerTheme('default', {
    primary: 'blue',
    accent: 'red',
    warn: 'red',
    background: 'white'
  })

new Vue({
    el: "#app",
    render: r => r(require("./main.vue"))
})
