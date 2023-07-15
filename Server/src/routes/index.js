const {Router} = require("express")
const router = Router()
const {characters} = require("./characters")
const {favorites} = require("./favorites")

router.use("/", characters)
router.use("/fav", favorites)

module.exports = {
    router
}