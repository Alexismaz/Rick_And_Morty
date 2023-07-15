const {User} = require("../DB_connection")

module.exports = postUser = async (req, res) => {
    try {
        const {email, password} = req.body
        if(email && password && email !== "" && password !== "") {
            const [user, created] = User.findOrCreate({
                where: {email},
                defaults: {password}
            })
            res.status(200).json(user)
        } else {
            res.status(400).end("Faltan Datos")
        }
    } catch (error) {
        res.status(500).end(error)
    }

}