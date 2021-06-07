const db = require('../models');

module.exports = {
    findAllSaved: (req, res) => {
        db.Book
            .find({}).then(bookData => res.json(bookData))
    }
}