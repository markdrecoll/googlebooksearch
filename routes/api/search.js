const router = require("express").Router();
const axios = require('axios')

router.route('/')
    .get((req, res) => {
        //we should call the search function in controller
        console.log("i'm here");
        res.status(200).send();
    })

module.exports = router;