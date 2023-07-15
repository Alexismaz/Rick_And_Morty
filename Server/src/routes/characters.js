const {Router} = require("express")
const characters = Router()
const getCharById = require("../controllers/getCharById")
const login = require("../controllers/login")


characters.get("/character/:id", getCharById)
characters.get("/login", login)


module.exports = {
    characters
}