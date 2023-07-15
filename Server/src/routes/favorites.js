const {Router} = require("express")
const favorites = Router()
const {deleteFav, postFav} = require("../controllers/handleFavorites")

favorites.post("/", postFav)
favorites.delete("/:id", deleteFav)

module.exports = {
    favorites
}