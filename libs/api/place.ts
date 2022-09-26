export const getAllPlaceList = async () => {
    const url = "/api/place/all"
    const option = {
        method: "GET",
    };
    return await fetch(url, option).then(response => {
        return response.json();
    })
}

export const getOnePlaceInfo = async (id:string) => {
    const url = `/api/place/${id}`
    const option = {
        method: "GET",
    }
    return await fetch(url, option).then(response => {
        return response.json();
    })
}
