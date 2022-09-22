import mapboxgl, { GeoJSONSource } from "mapbox-gl";
import { addClusterMarkerEvents } from "../../../Marker/ClusterMarker/addClusterMarkerEvents";
import {ClusterMarkerSeal, ClusterMarkerString} from "../../../Marker/ClusterMarker";
export const updateMarkers = async ({ map  , allPointMarkers, clusterMarkers,source}: {
  map: mapboxgl.Map
  allPointMarkers: { [key: string | number]: mapboxgl.Marker },
  clusterMarkers: { [key: string | number]: mapboxgl.Marker },
  source?: GeoJSONSource;
}) => {

  const features = map.querySourceFeatures("placeList");
  // console.log(features,allPointMarkers);
  const featureLoop = async () => {
    const newMarkers: { [key: string | number]: mapboxgl.Marker } = {};
    const newClusterMarkers: { [key: string | number]: mapboxgl.Marker } = {};
    // console.log('feature 조회 시작')
    for (const feature of features) {
      // console.log("feature : ",feature)
      const props = feature.properties;
      const coord = feature.geometry.coordinates;
      const { id } = props;
      
      if (!props?.cluster) {
        //클러스터 안된 마커들 여기서 세팅, 미리 만들어진 마커들 불러오기
        newMarkers[id] = allPointMarkers[id];
        continue
      }
      else {
        //클러스팅 된 마커들은 api 써서 만들어야한다


        const clusterId = props.cluster_id
        const pointCount = props.point_count
        // console.log("cluster? : ", coord, clusterId, clusterMarkers);
        //없으면 새로 만들고, clusterMarkers객체에 추가
        
        if (!clusterMarkers[clusterId]) {
          clusterMarkers[clusterId] = await addClusterLeaves( source, clusterMarkers, { id, clusterId, coord,pointCount })
          continue;
        }
        //있으면 그냥 넣어주기
        else {
          newClusterMarkers[clusterId] = clusterMarkers[clusterId]
        }

        }
    }
    return {newMarkers,newClusterMarkers}
  }
  //비동기처리 해주려고 await 리턴
  return await featureLoop();
};



async function addClusterLeaves(source, clusterMarkers, { clusterId, coord, id, pointCount }) {
  // console.log("클러스터 잎들 추가")
    let marker = clusterMarkers[clusterId];
    let prom = new Promise((resolve, reject) => {
      source?.getClusterLeaves(clusterId, 6, 0, (err, aFeatures) => {
        // console.log(clusterId, aFeatures, coord, clusterMarkers)
        let el = createClusterMarkerElem(aFeatures,clusterId, pointCount);
 
        marker = clusterMarkers[clusterId] = new mapboxgl.Marker({
          element: el,
        }).setLngLat(coord);
        resolve(marker);
      })
    })
    // console.log(marker);

    return prom.then(marker=>marker);
}



function createClusterMarkerElem(aFeatures,clusterId, pointCount) :HTMLElement {


  const el = document.createElement("div");
  const markers = document.createElement("div");
  markers.innerHTML = ClusterMarkerSeal(pointCount, aFeatures.length) + ClusterMarkerString(aFeatures);
  el.appendChild(markers);

  // el.innerHTML = ClusterMarkerSeal
  addClusterMarkerEvents(el);
  return el;

}