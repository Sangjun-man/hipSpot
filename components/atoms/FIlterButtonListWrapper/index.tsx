import styled from "@emotion/styled";
import React from "react";

interface FilterButtonListWrapperProps {
  children: React.ReactNode;
}

const FilterButtonListWrapper = ({
  children,
}: FilterButtonListWrapperProps) => {
  return (
    <StyledFilterButtonListWrapper>{children}</StyledFilterButtonListWrapper>
  );
};

export default FilterButtonListWrapper;
const StyledFilterButtonListWrapper = styled.div`
  position: fixed;
  top: 0;
  z-index: 1;
  width: 100%;
  height: 100%;
  padding: 0.875rem;
  display: flex;
  max-width: 1200px;
  max-height: 120px;
  flex-wrap: wrap;
  /* background-color: #00000000; */
  & > * {
    margin-bottom: 0.875rem;
    margin-right: 0.875rem;
  }
  @media screen and (max-width: 768px) {
    max-width: 100vw;
  }
`;
