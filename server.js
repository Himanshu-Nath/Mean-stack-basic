var express = require("express");
var bodyParser = require("body-parser");
mongoose = require("mongoose");
var app = express();
var consts = require("./config/constants.js");
var db = require("./config/db");
var movie = require("./server/routes/movie")

app.use(bodyParser.urlencoded({limit: '50mb', extended: true, parameterLimit: 1000000}));
app.use(bodyParser.json({limit: '50mb', parameterLimit: 1000000}));

app.use('/', express.static(__dirname + '/'));
app.use('/node_modules', express.static(__dirname + '/node_modules'));
app.use('/app', express.static(__dirname + '/app'));
app.use('/assets', express.static(__dirname + '/assets'));

app.get('/api/movie/list', movie.getMovieList);

app.get('/', function(req, res) {
    res.send(__dirname + '/index.html');
})

app.listen(consts.PORT_NUMBER, function () {
    console.log("Server is running at port: "+consts.PORT_NUMBER);
})
