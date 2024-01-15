const baseURL = `${process.env.REACT_APP_BACKEND_URL}`;

export const getImages = async (term, start, imagesToSearch, fileTypeOption) => {
    let requestURL = `${baseURL}/google/images?q=${term}&start=${start}&num=${imagesToSearch}&fileType=${fileTypeOption}`;
    try {
        let response = await fetch(requestURL, {
            method: "POST"
        });
        if (response.ok) {
            let responseJSON = await response.json();
            return responseJSON;
        }
    } catch (error) {
        console.log(error);
    }
}