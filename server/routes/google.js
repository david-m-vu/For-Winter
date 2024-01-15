const { searchImages } = require("../controllers/google.js");

const express = require("express"); 
const router = express.Router();

router.post("/images", searchImages);

module.exports = router;


