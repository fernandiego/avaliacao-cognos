const axios = require("axios")
const api = axios.create({
    baseURL: "https://ghibliapi.herokuapp.com"
})

const studioghibliapi = {
    list: _ => api.get("/films", (req, res) => {
        res.send(ret)
    })
}

module.exports = {
    studioghibliapi
}