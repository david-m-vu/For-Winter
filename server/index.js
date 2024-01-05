const searchRoutes = require("./routes/search.js");
const dotenv = require("dotenv")

const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const { xss } = require('express-xss-sanitizer');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.static("client"));
app.use(bodyParser.json({limit:'1kb'}));
app.use(bodyParser.urlencoded({extended: true, limit:'1kb'}));
app.use(xss());

const PORT = process.env.PORT || 3001;

dotenv.config();

app.get("/", async (req, res, next) => {
    res.status(200).json({"message": "Dasima web server"});
})

app.use("/search", searchRoutes);


app.listen(PORT, () => {
    console.log("Server is listening on port " + PORT)
})