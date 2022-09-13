export const renderMarkers = async ({map, newMarkers, newClusterMarkers,allPointMarkers,clusterMarkers, markersOnScreen, clusterMarkersOnScreen }) => {
// console.log("랜더링 , 스크린마커들: " ,newMarkers,markersOnScreen, newClusterMarkers,clusterMarkersOnScreen)   
    for (const id of Object.keys(newMarkers)) {
        if (!markersOnScreen[id]) {
            // console.log(marker);
            // console.log("=]\-[ddId : ", id);
            markersOnScreen[id] = allPointMarkers[id]
            allPointMarkers[id].addTo(map);
        }
    }
    for (const id of Object.keys(newClusterMarkers)) {
        if (!clusterMarkersOnScreen[id]) {
            // console.log(marker);
            // console.log("=]\-[ddId : ", id);
            clusterMarkersOnScreen[id] = clusterMarkers[id]
            clusterMarkers[id].addTo(map);
        }
    }

}