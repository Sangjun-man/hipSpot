import { ActiveFilterList, FilterList } from "../../types/type";

export const filterListToActiveList = ( filterList : FilterList) => {
    const activeFilterList: ActiveFilterList = [];
    //동적으로 작동시키고 싶은데,, 리팩토링 나중에 합시다잉
    // Object.keys(filterList).forEach((key) => {
    //     filterList[].forEach((state) => {
    //         activeFilterList.push({
    //             placeType: 'items',
    //             name: state,
    //             active: false
    //         })
    //     })
    // })
    filterList['items'].forEach((state) => {
            activeFilterList.push({
                placeType: 'items',
                name: state,
                selected: false
            })
    }),
    filterList['categories'].forEach((state) => {
        activeFilterList.push({
            placeType: 'categories',
            name: state,
            selected: false
        })
    })
    // console.log(activeFilterList);
    return activeFilterList;
}
