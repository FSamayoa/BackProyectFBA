const express = require("express")
const routes = require("./routes/routes")
const routesWeek = require("./routes/routesWeek")


server = express()

server.use("/week", routesWeek)
server.use("/api", routes)

module.exports = server