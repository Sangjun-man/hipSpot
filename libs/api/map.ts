export const getGeocode = async () => {
    const url = "api/map/all"
    const option = {
     method: "GET",
    };
 return await fetch(url, option).then(response => {
     return response.json();
 });
}
