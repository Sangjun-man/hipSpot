import { LngLatLike } from "mapbox-gl";
import { atom, selector } from "recoil";
import { Place } from "../../types/place";
import { placeListAtom } from "../place/place";

export const markerListSelector = selector({
    key: "selector/markerList",
    get: ({ get }) => {
        const placeList: Array<Place> = get(placeListAtom);
        const markerList = placeList.map((place) => {
            const { borderColor, mapData } = place;
            return { borderColor, mapData }
        })
        return markerList

    },
});


export const geoJsonAtom = atom({
    key: "atom / geoJson",
    default: []
})



export type CameraStateType = {
    center: LngLatLike;
    pitch: number;
    bearing: number;
    markerClicked: boolean;
    zoom: number;
}

export const cameraStateAtom = atom<CameraStateType>({
    key: 'atom / camera',
    default: {
        center:  [127.0582071, 37.5447481],
        pitch: 0,
        bearing: 0,
        markerClicked: false,
        zoom: 17
    }
})