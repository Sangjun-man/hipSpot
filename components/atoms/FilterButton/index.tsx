import styled from "@emotion/styled";
import React from "react";

export interface FilterButtonProps {
  children: React.ReactNode | string;
  selected?: boolean;
  onClick?: (e?: React.MouseEvent<HTMLButtonElement>) => void;
}

const FilterButton = ({ children, selected, onClick }: FilterButtonProps) => {
  return (
    <StyledFilterButton onClick={onClick} selected={selected}>
      {children}
    </StyledFilterButton>
  );
};

export default FilterButton;

const StyledFilterButton = styled.button<FilterButtonProps>`
  border-radius: 10px;
  background-color: ${(props) => (props.selected ? `#ffbcbc` : `#ffffff`)};
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
