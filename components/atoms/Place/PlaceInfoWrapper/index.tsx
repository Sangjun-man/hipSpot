import styled from "@emotion/styled";
import React from "react";

interface PlaceInfoWrapper {
  children: React.ReactNode;
}

const PlaceInfoWrapper = ({ children }: PlaceInfoWrapper) => {
  return <StyledPlaceInfoWrapper>{children}</StyledPlaceInfoWrapper>;
};

export default PlaceInfoWrapper;

const StyledPlaceInfoWrapper = styled.div`
  position: relative;
  border-left: 4px solid rgba(5, 5, 5, 0.7);
  padding: 0.75rem;
  & > div {
    padding: 0.5rem 0;
    & + div {
      padding-top: 0;
    }
  }
`;
