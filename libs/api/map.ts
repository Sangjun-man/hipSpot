export const getGeoJson = async () => {
    const url = "/api/map/GeoJson"
    const option = {
     method: "GET",
    };
 return await fetch(url, option).then(response => {
     return response.json();
 });
}

