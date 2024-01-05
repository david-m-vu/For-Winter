const express = require("express");
const router = express.Router();

const { googleSearch } = require("../controllers/search.js")

router.get("/", googleSearch)

module.exports = router;