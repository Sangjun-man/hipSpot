import styled from "@emotion/styled";
import React from "react";

interface FilterButton {
  children: React.ReactChildren | string;
  onClick: () => void;
}

const FilterButton = ({ children, onClick }: FilterButton) => {
  return <StyledFilterButton>{children}</StyledFilterButton>;
};

export default FilterButton;

const StyledFilterButton = styled.button`
  border-radius: 10px;
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30px;
  min-width: 30px;
  box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.5);
  border: 0px;
  padding: 0.5rem;
  &:hover {
    background-color: #c4c4c4;
  }
  &:active {
    background-color: #8a8a8a;
  }
`;
