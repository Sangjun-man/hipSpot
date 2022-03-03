import React from "react";
import CardLabel, { CardLabelProps } from "../../atoms/Card/CardLabel";
import CardWrapper from "../../atoms/Card/CardWrapper";
import ImageComp, { ImageProps } from "../../atoms/ImageComp";

interface PlaceCardProps extends CardLabelProps, ImageProps {}

const PlaceCard = ({
  src,
  alt,
  placeType,
  distance,
  placeName,
  description,
}: PlaceCardProps) => {
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

export default PlaceCard;
