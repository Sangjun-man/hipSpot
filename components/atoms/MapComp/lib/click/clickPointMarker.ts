import mapboxgl, { GeoJSONSource } from "mapbox-gl";
import { useSetRecoilState } from "recoil";
import { getOnePlaceInfo } from "../../../../../libs/api/place";
import { infoPropsStateAtom, InfoPropsStateType } from "../../../../../libs/states/infoWindowState";
import { TabState } from "../../../../../libs/types/infowindow";

export type clusterLeavesInfoParam = {
    map: mapboxgl.Map,
    sourceId: string,
    clusterLayerId: string,
    setInfoProps?: (info: any) => void;
    tabState: TabState;
    setTabState?: ( tabState : any )=>void;
}

export const clickPointMarker = ({ map, sourceId, clusterLayerId, setInfoProps = ()=>{console.log('error')} ,tabState, setTabState = ()=>{console.log('error')}}: clusterLeavesInfoParam) => {
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
        if (features.length === 0 || features === null) {
            return console.log('features가 없어요')
        }
        else {
            const feature = features[0];
            const { instaId } = feature.properties!
            const info = await getOnePlaceInfo(instaId);
            const { address, businessDay, contactNum, kakaoMapUrl, naverMapUrl, menu, placeName, review } = info;
            const infoProps: InfoPropsStateType = {
                contentsArgs: {
                    placeName,
                    infoList: [
                        { title: "영업시간", content: businessDay },
                        { title: "주소", content: address },
                        { title: '전화번호', content: contactNum },
                    ],
                    instagram: instaId
                },
                imageList: [
                    { src: `/images/${instaId}/0.jpg` },
                    { src: `/images/${instaId}/1.jpg` },
                    { src: `/images/${instaId}/2.jpg` },
                    { src: `/images/${instaId}/3.jpg` },
                    { src: `/images/${instaId}/4.jpg` },
                    { src: `/images/${instaId}/5.jpg` },
                    { src: `/images/${instaId}/6.jpg` },
                    { src: `/images/${instaId}/7.jpg` },
                ],
                menuInfoList: [],
                imageTabList: [],
            }
            setInfoProps(infoProps);
            

            const midTabState = { ...tabState, top: popUpHeights.middle };

            setTabState(midTabState)


        }
    });
}
