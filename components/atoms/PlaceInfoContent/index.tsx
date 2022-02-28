import styled from "@emotion/styled";
import React from "react";

interface PlaceInfoContentCssProps {
  fontSize?: number | string;
}
interface PlaceInfoContentProps extends PlaceInfoContentCssProps {
  title: string;
}

const PlaceInfoContent = ({
  fontSize = 0.75,
  title,
}: PlaceInfoContentProps) => {
  return (
    <StyledPlaceInfoContent fontSize={fontSize}>{title}</StyledPlaceInfoContent>
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
