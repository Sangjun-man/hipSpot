export const calcCoordDistance = (coordinates : [ { lng: number, lat: number }, {lng: number, lat: number}]) => {
    const [p1, p2] = coordinates;
    const { lat:p1_lat, lng:p1_lng} = p1;
    const { lat:p2_lat, lng:p2_lng } = p2;
    return Math.sqrt( Math.pow((p1_lat - p2_lat),2) + (Math.pow((p2_lat - p1_lat),2)));
}