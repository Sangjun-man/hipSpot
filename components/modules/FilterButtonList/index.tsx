import React from "react";
import FilterButton, { FilterButtonProps } from "../../atoms/FilterButton";
import FilterMenuStateButton, {
  FilterMenuStateButtonProps,
} from "../../atoms/FilterMenuStateButton";

import ModalHeader from "../../atoms/Modal/ModalHeader";
interface FilterButtonListProps {
  filterList: string[];
}

const FilterButtonList = ({ filterList }: FilterButtonListProps) => {
  const filteringList = ["heelll", "lllloooww", "teeee ", "ssstt"];

  return (
    <ModalHeader>
      <FilterMenuStateButton opened={false} />
      {filteringList.map((filtering, i) => (
        <FilterButton key={i}>{filtering}</FilterButton>
      ))}
    </ModalHeader>
  );
};

export default FilterButtonList;
