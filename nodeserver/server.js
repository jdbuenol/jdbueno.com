const express = require("express");
const anilistAPI = require("anilist-node");
const anilist = new anilistAPI();
const server = express();


server.use((req, res, next) => {
   res.setHeader('Access-Control-Allow-Origin', '*');
   next();
})

server.get("/", (req, res) => {
    anilist.activity.getUserActivity(840122, 1, 12).then(data => {
        res.json(data);
    });
})

server.listen("8080", () => console.log("LIstening ing sever 8080"));
