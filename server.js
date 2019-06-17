var express = require("express")
var mongoose = require("mongoose")
var axios = require("axios")
var cheerio = require('cheerio')


var PORT = 3000
var app = express

var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";

mongoose.connect(MONGODB_URI);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Make public a static folder
app.use(express.static("public"));

app.listen(PORT, function() {
    console.log("App running on port " + PORT + "!")
});  