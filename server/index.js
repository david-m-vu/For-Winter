const googleRoutes = require("./routes/google.js");
require("dotenv").config();

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

app.get("/", (req, res) => {
    res.status(200).json({"message": "Dasima web server"});
})

app.use("/google", googleRoutes);

app.listen(PORT, () => {
    console.log("Server is listening on port " + PORT)
})