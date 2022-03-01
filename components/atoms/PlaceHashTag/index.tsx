import styled from "@emotion/styled";
import React from "react";

interface PlaceHashTagCssProps {
  fontSize?: number | string;
  color?: string;
}
interface PlaceHashTagProps extends PlaceHashTagCssProps {
  hashTag: string[];
}

const PlaceHashTag = ({ fontSize, color, hashTag }: PlaceHashTagProps) => {
  return (
    <StyledPlaceHashtag>
      {hashTag.map((tag) => {
        return `#${tag} `;
      })}
    </StyledPlaceHashtag>
  );
};

export default PlaceHashTag;

const StyledPlaceHashtag = styled.div<PlaceHashTagCssProps>`
  font-size: ${(props) =>
    typeof props.fontSize === "string"
      ? props.fontSize
      : props.fontSize + "rem"};
  color: ${(props) => props.color};
  font-weight: 700;
`;
