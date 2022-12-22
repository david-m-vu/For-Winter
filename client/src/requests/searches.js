const baseURL = "api/images";

export const getImages = async (term, start, imagesToSearch, fileTypeOption) => {
    let requestURL = baseURL + "?q=" + term + "&start=" + start + "&num=" + imagesToSearch + "&fileType=" + fileTypeOption;
    try {
        let response = await fetch(requestURL);
        if (response.ok) {
            let responseJSON = await response.json();
            return responseJSON;
        }
    } catch (error) {
        console.log(error);
    }

}