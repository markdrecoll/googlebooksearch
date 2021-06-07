const router = require("express").Router();
const axios = require('axios');
const savedController = require("../../controller/savedController")

router.route('/')
    .get(savedController.findAllSaved)

module.exports = router;