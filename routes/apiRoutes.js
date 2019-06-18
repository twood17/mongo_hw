var axios = require("axios");
var cheerio = require("cheerio");
var db = require("../models");

module.exports = function(app) {
    app.get('/api/scrapes', (req, res) => {
        axios.get('https://www.bbc.com/news').then(response => {
            var $ = cheerio.load(response.data);

            console.log(response)
        })
    })
}