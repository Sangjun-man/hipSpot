import React from "react";
import { ActiveFilterList, FilterList } from "../../../types/type";
import ModalBackground from "../../atoms/Modal/ModalBackground";
import ModalContainer from "../../atoms/Modal/ModalContainer";
import ModalHeader from "../../atoms/Modal/ModalHeader";
import FilterButtonList from "../../modules/FilterButtonList";

// type placeTypes = "categories" | "items";

export type FilterListWindowTemplateProps = {
  isFilterListOpen: boolean;
  filterListByPlaceType?: Array<ActiveFilterList>;
  activeFilterList: ActiveFilterList;
};

const FilterListWindowTemplate = ({
  isFilterListOpen,
  filterListByPlaceType,
  activeFilterList,
}: FilterListWindowTemplateProps) => {
  return (
    <ModalBackground isFilterListOpen={isFilterListOpen}>
      <ModalContainer>
        <ModalHeader>
          <FilterButtonList
            filterArray={activeFilterList}
            isFilterListOpen={isFilterListOpen}
            displayActive={true}
          />
        </ModalHeader>

        {filterListByPlaceType!.map((filterArray, i) => (
          <FilterButtonList key={i} filterArray={filterArray} />
        ))}

        {/* {Object.keys(filterListByPlaceType!).forEach((filterList, i) => (
          <FilterButtonList
            key={i}
            filterArray={filterListByPlaceType[filterList]}
          />
        ))} */}
      </ModalContainer>
    </ModalBackground>
  );
};

export default FilterListWindowTemplate;
