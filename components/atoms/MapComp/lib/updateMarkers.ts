import mapboxgl from "mapbox-gl";
import { FeatureCollection, Geometry, GeoJsonProperties } from "geojson";
import { markerString } from "../../Marker/PointMarker";
// const markers : { [key: string | number]: mapboxgl.Marker }= {};
// const markersOnScreen : { [key: string | number]: mapboxgl.Marker }= {};
// const clusterMarkers : { [key: string | number]: mapboxgl.Marker }= {};
// const clusterMarkersOnScreen : { [key: string | number]: mapboxgl.Marker }= {};
// , markers, markersOnScreen, clusterMarkers, clusterMarkersOnScreen
export const updateMarkers = async ({ map  , markers, markersOnScreen, clusterMarkers, clusterMarkersOnScreen}: {
  map: mapboxgl.Map
  markers: { [key: string | number]: mapboxgl.Marker },
  markersOnScreen: { [key: string | number]: mapboxgl.Marker },
  clusterMarkers: { [key: string | number]: mapboxgl.Marker },
  clusterMarkersOnScreen: { [key: string | number]: mapboxgl.Marker },
}) => {
  // console.log(markers,markersOnScreen,markers,clusterMarkers,clusterMarkersOnScreen)
  const newMarkers: { [key: string | number]: mapboxgl.Marker } = {};
  const newClusterMarkers: { [key: string | number]: mapboxgl.Marker } = {};
  const features = map.querySourceFeatures("placeList");
  for (const feature of features) {
    const coords = feature.geometry.coordinates;
    const props = feature.properties;
    if (!props?.cluster) {
      //클러스터 안된 마커들 여기서 세팅 가능할듯
      const id: string = feature.properties?.instaId;
      // let marker;
      if (!markers[id]) {
        const src = `/images/${id}/0.jpg`
        const el = document.createElement("div");
        el.innerHTML = markerString({src,borderColor:"#ff00ff"});
        markers[id] = new mapboxgl.Marker({
          element: el,
        }).setLngLat(coords);
      }

      newMarkers[id] = markers[id];4

      if (!markersOnScreen[id]) {
        // console.log(marker);
        // console.log("=]\-[ddId : ", id);
        markers[id].addTo(map);
      }
      continue;
    }
    const id = props.cluster_id;

    // let marker = clusterMarkers[id];
    if (!clusterMarkers[id]) {
      console.log(feature);
      const el = document.createElement("div");
      el.innerHTML = markerString({ src: "", borderColor: "#ffffff" });
      clusterMarkers[id] = new mapboxgl.Marker({
        element: el,
      }).setLngLat(coords);
    }

    newClusterMarkers[id] = clusterMarkers[id];

    if (!clusterMarkersOnScreen[id]) {
      console.log("addId : ", id);
      clusterMarkers[id].addTo(map);
    }
  }

  // for every marker we've added previously, remove those that are no longer visible
  for (const id in markersOnScreen) {
    // console.log('remove 왜 안돼', id)
    if (!newMarkers[id]) {
      // console.log("remove Id : ", id);
      markersOnScreen[id].remove();
    }
  }
  for (const id in clusterMarkersOnScreen) {
    if (!newClusterMarkers[id]) {
      // console.log("remove Id : ", id);
      clusterMarkersOnScreen[id].remove();
    }
  }
  // console.log(
  //   "update complete : ", markersOnScreen, clusterMarkersOnScreen, newMarkers, newClusterMarkers)
  // markersOnScreen = {...newMarkers};
  // clusterMarkersOnScreen = {...newClusterMarkers};
  return { newClusterMarkers, newMarkers }
  

};