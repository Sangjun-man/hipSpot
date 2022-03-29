import { atom, RecoilValueReadOnly, selector } from "recoil";
import { FilterState } from "../../types/type";

export const filterListAtom = atom<FilterState>({
    key: "atom/filterList",
    default:  {categories:[], items:[]},
})

export const filterStateAtom = atom<FilterState>({
    key: "atom/filterState",
    default: {categories:[], items:[]},
})

export const wholeFilterList : RecoilValueReadOnly<{[key:string]:boolean}> = selector({
    key: "wholefilterList",
    get: ({get}) => {
        const activeFilterList: {[key:string]:boolean} = {};
        const filterState = get(filterStateAtom);
        const filterList = get(filterListAtom);

        //리팩토링
        filterState["items"].forEach((state) => { activeFilterList[`${state}`] = true })
        filterState["categories"].forEach((state) => { activeFilterList[`${state}`] = true })
        filterList["items"].forEach((state) => { activeFilterList[`${state}`] = false })
        filterList["categories"].forEach((state) => { activeFilterList[`${state}`] = false })
        return activeFilterList;
    }
})



