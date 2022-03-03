import styled from "@emotion/styled";
import React from "react";

export interface PlaceInfoContentCssProps {
  fontSize?: number | string;
}
export interface PlaceInfoContentProps extends PlaceInfoContentCssProps {
  content: string;
}

const PlaceInfoContent = ({
  fontSize = 0.75,
  content,
}: PlaceInfoContentProps) => {
  return (
    <StyledPlaceInfoContent fontSize={fontSize}>
      {content}
    </StyledPlaceInfoContent>
  );
};

export default PlaceInfoContent;

const StyledPlaceInfoContent = styled.div<PlaceInfoContentCssProps>`
  font-weight: 600;
  font-size: ${(props) =>
    typeof props.fontSize === "string"
      ? props.fontSize
      : props.fontSize + "rem"};
`;
