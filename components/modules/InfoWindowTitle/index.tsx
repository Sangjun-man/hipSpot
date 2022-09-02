import React from "react";
import PlaceHashTag, { PlaceHashTagProps } from "../../atoms/InfoWindow/Tab";
import PlaceName, { PlaceNameProps } from "../../atoms/InfoWindow/Title";

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
