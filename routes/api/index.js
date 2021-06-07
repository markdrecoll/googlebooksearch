const router = require("express").Router();
const saved = require("./saved");
const search = require("./search");

router.use("/saved", saved);
router.use("/search", search);

module.exports = router;