import styled from "@emotion/styled";
import React from "react";

export interface PlaceInfoTitleCssProps {
  fontSize?: number | string;
}
export interface PlaceInfoSubjectProps extends PlaceInfoTitleCssProps {
  title: string;
}

const PlaceInfoSubject = ({
  fontSize = 0.875,
  title,
}: PlaceInfoSubjectProps) => {
  return (
    <StyledPlaceInfoTitle fontSize={fontSize}>{title}</StyledPlaceInfoTitle>
  );
};

export default PlaceInfoSubject;

const StyledPlaceInfoTitle = styled.div<PlaceInfoTitleCssProps>`
  font-weight: 800;
  font-size: ${(props) =>
    typeof props.fontSize === "string"
      ? props.fontSize
      : props.fontSize + "rem"};
`;
