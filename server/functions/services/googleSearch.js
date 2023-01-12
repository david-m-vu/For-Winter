const { v4 } = require("uuid");
const fetch = require("node-fetch");

const googleBaseURL = "https://www.googleapis.com/customsearch/v1?";
const apiKey = "AIzaSyD4P6ynpyUFhJqGRirSJQ1BB_dtWRKhXyI"; //process.env.API_KEY;
const engineID = "92823ef04d34141ba"; //process.env.ENGINE_ID;

const fetchImages = async (term, start, imagesToSearch, fileTypeOption) => {
    if (term === "") {
        return;
    }

    let requestParams = `key=${apiKey}&cx=${engineID}&q=${term}&start=${start}&num=${imagesToSearch}&searchType=image`; 
    if (fileTypeOption !== "any_image") {
        requestParams += "&fileType=" + fileTypeOption; 
    }

    let urlToFetch =  googleBaseURL + requestParams;

    try {
        const response = await fetch(urlToFetch);
        if (response.ok) {
            const jsonResponse = await response.json();
            const allImages = jsonResponse.items; //an array of objects with the image data

            return allImages.map((image) => {
                image.id = v4();
                return image;
            });
        }

    } catch (error) {
        console.log(error.message);
    }
}

module.exports = { fetchImages };