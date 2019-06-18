const axios = require("axios");
const cheerio = require("cheerio");
const db = require("../models");

module.exports = function(app) {
    app.get('/api/scrapes', (req, res) => {
        axios.get('https://www.bbc.com/news').then(response => {
            const $ = cheerio.load(response.data);

            $('article').each((i, element) => {
                let result = {};

                result.image = $(this).find('.image-replace').attr('img');
                result.title = $(this).find('.media__title')
            })
            console.log(response)
        })
    })
}