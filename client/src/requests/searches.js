const baseURL = "https://dasima-backend.netlify.app/.netlify/functions/app/api/images";

export const getImages = async (term, start, imagesToSearch, fileTypeOption) => {
    let requestURL = `${baseURL}?q=${term}&start=${start}&num=${imagesToSearch}&fileType=${fileTypeOption}`;
    try {
        let response = await fetch(requestURL);
        console.log(response);
        if (response.ok) {
            let responseJSON = await response.json();
            console.log(responseJSON);
            return responseJSON;
        }
    } catch (error) {
        console.log(error);
    }

}