import mapboxgl, { LngLatLike } from "mapbox-gl";

const createPoint = ({map,coordinate, color='red'}: {map:mapboxgl.Map, coordinate:LngLatLike ,color:string}) => {
  const el = document.createElement("div");
  el.innerHTML = `<div style="width:10px; height:10px; background-color:${color};"> </div>`;
  new mapboxgl.Marker({
    element: el,
    anchor: "bottom",
  })
    .setLngLat(coordinate)
    .addTo(map);
}
  
            export default createPoint