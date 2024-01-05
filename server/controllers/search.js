const { fetchImages } = require("../requests/googleSearch.js");

const googleSearch = async (req, res) => {
    const term = req.query.q;
    const start = req.query.start;
    const imagesToSearch = req.query.num;
    const fileTypeOption = req.query.fileType;
    let allImages = await fetchImages(term, start, imagesToSearch, fileTypeOption);
    res.status(200).json(allImages);
}

module.exports = { googleSearch };