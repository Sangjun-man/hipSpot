import { atom, selector } from "recoil";
import { Place } from "../../types/place";
import { placeListAtom } from "../place/place";

export const markerListSelector = selector({
    key: "selector/markerList",
    get: ({get}) => {
        const placeList: Array<Place> = get(placeListAtom);
        const markerList = placeList.map((place) => {
            const { borderColor, mapData } = place;
            return {borderColor, mapData}
        })
        return markerList

    },
});

