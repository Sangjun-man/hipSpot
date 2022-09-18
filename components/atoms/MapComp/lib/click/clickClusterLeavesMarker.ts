import mapboxgl, { GeoJSONSource } from "mapbox-gl";

export type clusterLeavesInfoParam = {
    map: mapboxgl.Map,
    sourceId: string,
    // clusterLayerId: string,
}

export const clickClusterLeavesMarker = ({ map, sourceId,  } : clusterLeavesInfoParam) => {
    map.on("click", /* cluster layer id */ (e) => {
        const bbox = [
            [e.point.x - 30, e.point.y - 30],
            [e.point.x + 30, e.point.y + 30]
            ];
        let features = map.queryRenderedFeatures(bbox, {
        //   layers: [clusterLayerId],
        });
        
        if (features.length === 0 || features === null) {
            return console.log('features가 없어요')
        }
        let clusterId = features[0].properties?.cluster_id,
            point_count = features[0].properties?.point_count,
            clusterSource: GeoJSONSource = map.getSource(
                sourceId
            );
        let clusterList = [];

        
            clusterSource.getClusterLeaves(
                clusterId,
                point_count,
                0,
                (err, aFeatures) => {
                    clusterList = aFeatures;
                    console.log("getClusterLeaves",aFeatures);
                }
            );
    
      });
}
