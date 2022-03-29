export const getAllPlaceList = async () => {
    const url = "http://localhost:5000/place/all"
    const option = {
        method: "GET",
    };
    await fetch(url, option).then(response => {
        console.log(response);
        return response;
    })
}

