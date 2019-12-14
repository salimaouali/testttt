const express = require('express');
const app = express();
const port = 3000;
//Déclarer les routes______________________
const routesHotel= require("./src/compoHotel/routesHotel")
const routesRoom= require("./src/compoRoom/routesRoom")
const routesUser= require("./src/compoUser/routesUser")
//_________________________________________
const dataBase = require('./database');

var path = require('path');

// Use routes-----------------------------------------------------------
app.use('/hotel',routesHotel)
app.use('/room',routesRoom)
app.use('/user',routesUser)

//app.use('/',require('./src/compoUser/routesUser'));

//Connection à la DB, Lancement du serveur-------------------------------
app.listen(port,function (req, res) {
  console.log('Express server listening on port: ' + port);
})
module.exports= app
