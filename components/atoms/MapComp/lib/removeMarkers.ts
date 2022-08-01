export const removeMarkers = async ({ newMarkers, newClusterMarkers, markersOnScreen, clusterMarkersOnScreen }) => {


    console.log("마커 업데이트이전 :", newMarkers, markersOnScreen, newClusterMarkers,clusterMarkersOnScreen)
    
    for (const id of Object.keys(markersOnScreen)) {
        // console.log(id)
        if (!newMarkers[id]) {
            // console.log("스크린 마커 지워지나? :", markersOnScreen[id])
            markersOnScreen[id].remove();
            delete markersOnScreen[id];
        }
    }
    for (const id of Object.keys(clusterMarkersOnScreen)) {
        // console.log(id)

        if (!newClusterMarkers[id]) {
            // console.log("스크린 클러스터 마커 지워지나? :", clusterMarkersOnScreen[id])
            clusterMarkersOnScreen[id].remove();
            delete clusterMarkersOnScreen[id];
        }
    }
    return {...newMarkers, ...clusterMarkersOnScreen}
}