const baseURL = "api/images";

export const getImages = async (term, start, imagesToSearch, fileTypeOption) => {
    let requestURL = baseURL + "?q=" + term + "&start=" + start + "&num=" + imagesToSearch + "&fileType=" + fileTypeOption;
    let response = await fetch(requestURL);
    // console.log(response);
    return response;

}