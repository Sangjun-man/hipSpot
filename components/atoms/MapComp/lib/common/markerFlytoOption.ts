import { LngLatLike } from "mapbox-gl"
import { DURATION, PITCH, RAD } from "../../../../../libs/utils/const/mapCamera"

const markerFlytoOption = ({coordinate}:{coordinate:LngLatLike}) => {
    

    return {
        center:coordinate,
        bearing:(-2 * RAD ) - 3,
        pitch: PITCH,
        duration: DURATION,
        zoom:18,
    }
}
    export default markerFlytoOption