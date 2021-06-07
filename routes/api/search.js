const router = require("express").Router();
const axios = require('axios')

router.route('/')
    .get((req, res) => {
        console.log("i'm here");
        res.status(200).send();
    })

module.exports = router;