import React from "react";
import PlaceHashTag, {
  PlaceHashTagProps,
} from "../../atoms/Place/PlaceHashTag";
import PlaceName, { PlaceNameProps } from "../../atoms/Place/PlaceName";

interface InfoWindowTitleProps extends PlaceHashTagProps, PlaceNameProps {}

const InfoWindowTitle = ({ name, hashTag }: InfoWindowTitleProps) => {
  return (
    <div>
      <PlaceName name={name}></PlaceName>
      <PlaceHashTag hashTag={hashTag}></PlaceHashTag>
    </div>
  );
};

export default InfoWindowTitle;
