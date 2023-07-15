const axios = require("axios")
const url = "https://rickandmortyapi.com/api/character/"

const getCharById = async (req, res) => {
    try {
        let {id} = req.params
        const {data} = await axios.get(url + id)
            if(data) {
                let obj = {
                    id: data.id,
                    status : data.status,
                    name: data.name,
                    species: data.species,
                    origin: data.origin,
                    image: data.image,
                    gender: data.gender
                }
                res.status(200).json(obj)
            } else {
                res.status(404).end("Not found")
            }
    } catch (error) {
        res.status(500).json({message: error})
    }
}
module.exports = getCharById;