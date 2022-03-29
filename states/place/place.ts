import { atom, selector } from "recoil";

export const placeListAtom = atom({
    key: "atom/placeList",
    default:[],
});
export const currentMapPlaceList = atom({
    key: "placeList/current",
    default: []
});


export const getAllPlaceList = selector({
    key: "placeList/All/get",
    get: async ({ }) => {
        const url = "http://localhost:5000/place/all"
        const option = {
            method: "GET",
        };
        await fetch(url, option).then(response => {
            console.log(response);
            return response;
        })
    },
})


// export const getCurrentMapPlaceList = selector({
//     key: "placeList/current/get",
//     get: ({get }) => {
    
//     },

//     set: ({ get, set, reset }) => {
        
//     },
// })
