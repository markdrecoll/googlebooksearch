const router = require("express").Router();
const axios = require('axios');
const savedController = require("../../controller/savedController")

router.route('/')
    .get(savedController.findAllSaved)
    .post(savedController.saveBook)

router.route('/:id')
    .delete(savedController.deleteBook)

module.exports = router;