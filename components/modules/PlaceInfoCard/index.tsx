import React from "react";
import CardLabel, { CardLabelProps } from "../../atoms/Card/CardLabel";
import CardWrapper from "../../atoms/Card/CardWrapper";
import ImageComp, { ImageProps } from "../../atoms/ImageComp";

interface PlaceInfoCardProps extends CardLabelProps, ImageProps {}

const PlaceInfoCard = ({
  src,
  alt,
  placeType,
  distance,
  placeName,
  description,
}: PlaceInfoCardProps) => {
  return (
    <CardWrapper>
      <ImageComp src={src} alt={alt}></ImageComp>
      <CardLabel
        placeType={placeType}
        placeName={placeName}
        description={description}
        distance={distance}
      />
    </CardWrapper>
  );
};

export default PlaceInfoCard;
