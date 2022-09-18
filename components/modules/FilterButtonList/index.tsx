import React from "react";
import { useRecoilState } from "recoil";
import { activeFilterListSelector } from "../../../libs/states/filter/filter";
import { ActiveFilterList } from "../../../libs/types/type";
import FilterButton, { FilterButtonProps } from "../../atoms/FilterButton";
import FilterButtonListWrapper from "../../atoms/FIlterButtonListWrapper";
import FilterMenuStateButton, {
  FilterMenuStateButtonProps,
} from "../../atoms/FilterMenuStateButton";

interface FilterButtonListProps {
  filterArray: ActiveFilterList;
  isFilterListOpen?: boolean;
  displayActive?: boolean;
  // onClick?: () => void;
}

const FilterButtonList = ({
  filterArray,
  isFilterListOpen,
  displayActive = false,
}: // onClick,
FilterButtonListProps) => {
  const [activeFilterList, setActiveFilterList] = useRecoilState(
    activeFilterListSelector
  );

  const onClick = (name: string) => setActiveFilterList(name);

  return (
    <FilterButtonListWrapper>
      {typeof isFilterListOpen === "boolean" ? (
        <FilterMenuStateButton opened={isFilterListOpen} />
      ) : (
        <></>
      )}

      {displayActive
        ? filterArray.map((filtering, i) =>
            filtering.selected === true ? (
              <FilterButton
                key={i}
                selected={filtering.selected}
                onClick={() => onClick(filtering.name)}
              >
                {filtering.name}
              </FilterButton>
            ) : null
          )
        : filterArray.map((filtering, i) => (
            <FilterButton
              key={i}
              selected={filtering.selected}
              onClick={() => onClick(filtering.name)}
            >
              {filtering.name}
            </FilterButton>
          ))}
    </FilterButtonListWrapper>
  );
};

export default FilterButtonList;
