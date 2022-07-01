import { atom } from "recoil";

export const placeList = atom<PlaceList>({
    key: 'mainPlaceList',
    default :[],
})
