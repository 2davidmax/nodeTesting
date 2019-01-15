const express = require('express');
const app = express();
const multer = require("multer");
var upload = multer({dest: "uploads/"});

app.get('/', function(req, res){
  res.sendFile("index.html",{root:__dirname});
});

app.post("/",upload.none(), function(req, res){
  // console.log(req.files);
  res.end();
});

app.listen(1515);


