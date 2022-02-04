const express = require("express");
const server = express();


server.use((req, res, next) => {
   res.setHeader('Access-Control-Allow-Origin', '*');
   next();
})

server.get("/", (req, res) => {
    res.json({"juanjo":"Gei"});
})

server.listen("8080", () => console.log("LIstening ing sever 8080"));
