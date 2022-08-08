export const getAllPlaceList = async () => {
    const url = "api/place/all"
    const option = {
        method: "GET",
    };
    return await fetch(url, option).then(response => {
        return response.json();
    })
}

