const db = require('../models');

module.exports = {
    findAllSaved: (req, res) => {
        db.Book
            .find({}).then(bookData => res.json(bookData))
    },
    saveBook: (req, res) => {
        console.log('the controller has been hit.  here is what they want us to insert')
        console.log(req.body)
        db.Book
            .create(req.body).then(bookData => res.json(bookData)).catch(err => {
                res.json(err);
            })
    },
    deleteBook: (req, res) => {
        db.Book
            .remove({Book:id}).then(bookData => res.json(bookData))
    }
}