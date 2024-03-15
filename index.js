require ('dotenv').config()
const server = require ("./src/server")

const port = process.env.PORT || 3005;

server.listen(port, ()=>{
    console.log("Server on port: ",port);
})
