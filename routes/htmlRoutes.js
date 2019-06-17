var db = require('../models');

module.exports = function (app) {
    app.get('/', (req, res) => {
        db.Article.find({}).limit(20)
        .then(articles => res.render("index", {articles}))
        .catch(err => res.json(err));
    });
    app.get('/saved', (req, res) => {
        db.Article.find({})
        .then(result => res.render("saved", {articles: result}))
        .catch(err => res.json(err));
    })
}