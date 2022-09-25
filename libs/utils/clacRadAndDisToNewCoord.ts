export const clacRadAndDisToNewCoord = ({point,rad, distance} : {point:{lat: number, lng: number} | [number,number], rad:number, distance:number}) => {
    
    
    const { lng, lat } = point.length ? {lng : point[0], lat: point[1]}: point ;



    //우측하단 + +
    const newLat = lat + distance * Math.cos(rad)
    const newLng = lng + distance * Math.sin(rad)
    // console.log(`lat:${lat} ->  ${newLat}, lng : ${lng} ->${ newLng}`)

    return {lat :newLat, lng :newLng}
    // return {lat: lat + distance * radToPi, lng :lng + distance * radToPi}

}