import React, { useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import FilterListWindowTemplate from "../../components/Templates/FilterListWindowTemplate";
import { filterListToActiveList } from "../../libs/states/filterListToActivrList";
import {
  activeFilterListAtom,
  activeFilterListSelector,
  filterListAtom,
  isFilterListOpenAtom,
  placeTypeActiveFilterListSelector,
} from "../../states/filter/filter";

const FilterListWindowTemplateContainer = () => {
  //Atoms
  const [isFilterListOpen, setIsFilterListOpen] =
    useRecoilState(isFilterListOpenAtom);
  const [activeFilterList, setActiveFilterList] =
    useRecoilState(activeFilterListAtom);
  const filterList = useRecoilValue(filterListAtom);

  useEffect(() => {
    const addActiveState = filterListToActiveList(filterList);
    // console.log(addActiveState);
    setActiveFilterList(addActiveState);
  }, [filterList]);

  return (
    <FilterListWindowTemplate
      isFilterListOpen={isFilterListOpen}
      activeFilterList={activeFilterList}
      filterListByPlaceType={[
        activeFilterList.filter(
          (filtering, i) => filtering.placeType === "categories"
        ),
        activeFilterList.filter(
          (filtering, i) => filtering.placeType === "items"
        ),
      ]}
    />
  );
};

export default FilterListWindowTemplateContainer;
