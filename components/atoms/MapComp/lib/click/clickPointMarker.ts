import mapboxgl, { GeoJSONSource } from "mapbox-gl";
import { getOnePlaceInfo } from "../../../../../libs/api/place";
import {  InfoPropsStateType } from "../../../../../libs/states/infoWindowState";
import { CameraStateType } from "../../../../../libs/states/map/map";
import { TabState } from "../../../../../libs/types/infowindow";
import { clacRadAndDisToNewCoord } from "../../../../../libs/utils/clacRadAndDisToNewCoord";
import { DISTANCE, RAD } from "../../../../../libs/utils/const/mapCamera";
import markerFlytoOption from "../common/markerFlytoOption";

export type clusterLeavesInfoParam = {
    map: mapboxgl.Map,
    sourceId: string,
    clusterLayerId: string,
    setInfoProps?: (info: any) => void;
    tabState: TabState;
    setTabState?: (tabState: any) => void;
    cameraState: CameraStateType;
    setCameraState: (setCameraState: CameraStateType) => void
    cameraRef: any;
}



export const clickPointMarker = ({ map,
    sourceId,
    clusterLayerId,
    setInfoProps = () => { console.log('error') },
    tabState, setTabState = () => {
        console.log('error')
    },
    cameraState,
    setCameraState,
    cameraRef,
}: clusterLeavesInfoParam) => {
    map.on("click", /* cluster layer id */ async (e) => {



        const popUpHeights = {
            top: -30,
            middle: window.innerHeight / 2,
            thumbnail: window.innerHeight - 140,
            bottom: window.innerHeight - 30,
          };
        
        const bbox = [
            [e.point.x - 30, e.point.y - 20],
            [e.point.x + 30, e.point.y + 100]
        ];
        let features = map.queryRenderedFeatures(bbox, {
            layers: [clusterLayerId],
        });


        
        // console.log(features)
        if (features.length === 0 || features === null) {

            console.log('features가 없어요')
       
        }


        else {
            cameraRef.current = {...cameraRef.current, markerClicked:true}
            setCameraState({ ...cameraRef.current, markerClicked: true });

            const feature = features[0];
            const { instaId } = feature.properties!
            const { coordinates } = feature.geometry
            if (instaId) {
                const info = await getOnePlaceInfo(instaId);
                const { address, businessDay, contactNum, kakaoMapUrl, naverMapUrl, menu, placeName, review } = info;
            
                const newCoord = clacRadAndDisToNewCoord({
                    point: coordinates,
                    rad: RAD,
                    distance: DISTANCE,
                });
           
                //   console.log(newCoord);
            
                //계산값이랑 좀 달라서 보정치 입힘 
                map.flyTo(markerFlytoOption({
                    coordinate:
                        { lat: newCoord.lat, lng: newCoord.lng }
                }));
        
        
            
                const infoProps: InfoPropsStateType = {
                    contentsArgs: {
                        placeName,
                        infoList: [
                            { title: "영업시간", content: businessDay },
                            { title: "주소", content: address },
                            { title: '전화번호', content: contactNum },
                        ],
                        instaId
                    },
          
                    menuInfoList: [],
                }
  
        
                setInfoProps(infoProps);
                const midTabState = { onHandling: false, top: popUpHeights.middle, popUpState: "middle" };
                setTabState(midTabState)

            }
        }
    });
}



