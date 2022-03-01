import styled from "@emotion/styled";
import React from "react";

interface PlaceInfoTitleCssProps {
  fontSize?: number | string;
}
interface PlaceInfoTitleProps extends PlaceInfoTitleCssProps {
  title: string;
}

const PlaceInfoTitle = ({ fontSize = 0.875, title }: PlaceInfoTitleProps) => {
  return (
    <StyledPlaceInfoTitle fontSize={fontSize}>{title}</StyledPlaceInfoTitle>
  );
};

export default PlaceInfoTitle;

const StyledPlaceInfoTitle = styled.div<PlaceInfoTitleCssProps>`
  font-weight: 800;
  font-size: ${(props) =>
    typeof props.fontSize === "string"
      ? props.fontSize
      : props.fontSize + "rem"};
`;
