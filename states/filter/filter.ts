import { atom, GetRecoilValue, RecoilValueReadOnly, selector, selectorFamily } from "recoil";
import { ActiveFilterList, ActiveFilterState, FilterList} from "../../types/type";


//db에서 가져오는 필터리스트
export const filterListAtom = atom<FilterList>({
    key: "atom/filterList",
    default:  {categories:[], items:[]},
})

//서버로 필터링 리스트 쿼리 보낼때 사용
export const filterStateAtom = atom<string[]>({
    key: "atom/filterState",
    default:[],
})
//현재 active중인 필터링 리스트
export const activeFilterListAtom = atom<ActiveFilterList>({
    key: "atom/activeFilterList",
    default:[],
})
// filterButtonList on off 관리
export const activeFilterListSelector = selector<any>({
    key: "activeFilterList",
    get: ({get}) => {
        const activeFilterList:ActiveFilterList = get(activeFilterListAtom);
        return activeFilterList;
    },
    set: ({ set, get }, filterName) => {
        // console.log("셀렉터에서 setting때 받는 값 - ", filterName);
        const activeFilterList: ActiveFilterList = get(activeFilterListAtom);
        const newActiveFilterList = activeFilterList.map((filter: ActiveFilterState) =>
            (filter.name === filterName ? ({ ...filter, selected: !filter.selected }) : filter)
        );
        set(activeFilterListAtom, newActiveFilterList);
    }
})



export const placeTypeActiveFilterListSelector = selectorFamily<ActiveFilterList, string>({
    key: "placeTypeAcitveFilterList",
    get: placeType => ({ get }) => {
        const activeFilterList: ActiveFilterList = get(activeFilterListAtom);
        const placeTypeFilterList = activeFilterList.filter((filter) => filter.placeType === placeType);
        return placeTypeFilterList
    },
})

export const isFilterListOpenAtom = atom<boolean>({
    key: 'isFilterListOpenAtom',
    default:false,
}) 
