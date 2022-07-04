import { atom, selector } from "recoil";
import { Place } from "../../types/place";

export const placeListAtom = atom<Array<Place>>({
    key: "atom/placeList",
    default:[],
});


export const currentMapPlaceList = atom({
    key: "placeList/current",
    default: []
});


// export const getAllPlaceList = selector({
//     key: "placeList/All/get",
//     get: async ({ }) => {
//         const url = "http://localhost:5000/place/all"
//         const option = {
//             method: "GET",
//         };
//         await fetch(url, option).then(response => {
//             console.log(response);
//             return response;
//         })
//     },
// })

export const isPlaceCardOpenAtom = atom<boolean>({
    key: 'isPlaceCardOpenAtom',
    default: false
})


// export const getCurrentMapPlaceList = selector({
//     key: "placeList/current/get",
//     get: ({get }) => {
    
//     },

//     set: ({ get, set, reset }) => {
        
//     },
// })
