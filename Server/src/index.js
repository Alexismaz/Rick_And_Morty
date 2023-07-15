const server = require("./app")
const PORT= 3001
const { conn } = require('./DB_connection');

server.listen(PORT, async ()=> {
   console.log("El server se levanto en: localhost:" + PORT),
   await conn.sync({ force: true })
})