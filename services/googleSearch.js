const { uuid } = require("uuidv4");
const fetch = require("node-fetch");

const googleBaseURL = "https://www.googleapis.com/customsearch/v1?";


const fetchImages = async (term, start, imagesToSearch, fileTypeOption) => {
    let apiKey = process.env.API_KEY;
    let engineID = process.env.ENGINE_ID;
    
    let requestParams;
    if (fileTypeOption !== "any_image") {
        requestParams = "key=" + apiKey + "&cx=" + engineID + "&q=" + term + "&start=" + start + 
        "&num=" + imagesToSearch + "&searchType=image&fileType=" + fileTypeOption; 
    } else {
        requestParams = "key=" + apiKey + "&cx=" + engineID + "&q=" + term + "&start=" + start + 
        "&num=" + imagesToSearch + "&searchType=image"; 
    }

    let urlToFetch =  googleBaseURL + requestParams;
    
    if (term === "") {
        return;
    }

    try {
        const response = await fetch(urlToFetch);
        if (response.ok) {
            const jsonResponse = await response.json();
            const allImages = jsonResponse.items; //an array of objects with the image data
            for (let i = 0; i < allImages.length; i++) {
                allImages[i].id = uuid();
            }
            return allImages;
        }

    } catch (error) {
        console.log(error.message);
    }
}

module.exports = { fetchImages };