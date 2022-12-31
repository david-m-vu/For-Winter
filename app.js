const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const app = express();
const { xss } = require('express-xss-sanitizer');
const bodyParser = require('body-parser');

const { fetchImages } = require("./services/googleSearch");

const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.static("client"));
app.use(bodyParser.json({limit:'1kb'}));
app.use(bodyParser.urlencoded({extended: true, limit:'1kb'}));
app.use(xss());

app.get("/api/images", async (req, res, next) => {
    const term = req.query.q;
    const start = req.query.start;
    const imagesToSearch = req.query.num;
    const fileTypeOption = req.query.fileType;
    let allImages = await fetchImages(term, start, imagesToSearch, fileTypeOption);
    res.status(200).json(allImages);
})

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
})