import React from "react";
import styled from "@emotion/styled";
import { IoIosArrowUp, IoMdReorder } from "react-icons/io";
import { useRecoilState } from "recoil";
import { isFilterListOpenAtom } from "../../../libs/states/filter/filter";

export interface FilterMenuStateButtonProps {
  opened: boolean;
  // onClick?: (e?: React.MouseEvent<HTMLButtonElement>) => void;
}

const FilterMenuStateButton = ({ opened }: FilterMenuStateButtonProps) => {
  const [isFilterListOpen, setIsFilterListOpen] =
    useRecoilState(isFilterListOpenAtom);
  const onMenuButtonClick = () => {
    setIsFilterListOpen(!isFilterListOpen);
  };

  return (
    <StyledFilterMenuStateButton onClick={onMenuButtonClick}>
      {opened ? <IoIosArrowUp /> : <IoMdReorder />}
    </StyledFilterMenuStateButton>
  );
};

export default FilterMenuStateButton;

const StyledFilterMenuStateButton = styled.button`
  border-radius: 10px;
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30px;
  width: 30px;
  box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.5);
  border: 0px;
  &:hover {
    background-color: #c4c4c4;
  }
  &:active {
    background-color: #8a8a8a;
  }
`;
