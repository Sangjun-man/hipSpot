import React from "react";
import FilterButton, { FilterButtonProps } from "../../atoms/FilterButton";
import FilterButtonListWrapper from "../../atoms/FIlterButtonListWrapper";
import FilterMenuStateButton, {
  FilterMenuStateButtonProps,
} from "../../atoms/FilterMenuStateButton";

interface FilterButtonListProps {
  filterList: string[];
}

const FilterButtonList = ({ filterList }: FilterButtonListProps) => {
  return (
    <FilterButtonListWrapper>
      <FilterMenuStateButton opened={false} />
      {filterList.map((filtering, i) => (
        <FilterButton key={i}>{filtering}</FilterButton>
      ))}
    </FilterButtonListWrapper>
  );
};

export default FilterButtonList;
