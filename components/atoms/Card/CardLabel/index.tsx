import { css } from "@emotion/react";
import styled from "@emotion/styled";
import React from "react";

interface CardLabelProps {
  placeType: string;
  distance: number;
  placeName: string;
  description: string[];
}

const CardLabel = ({
  placeType,
  distance,
  placeName,
  description,
}: CardLabelProps) => {
  return (
    <CardLabelWrapper>
      <FirstLine>
        <PlaceType> {placeType}</PlaceType>
        <ToDestinationDistance> {distance}m</ToDestinationDistance>
      </FirstLine>
      <PlaceName>{placeName} </PlaceName>
      {description.map((text, i) => {
        return <Description key={i}>{text}</Description>;
      })}
    </CardLabelWrapper>
  );
};

export default CardLabel;

const CardLabelWrapper = styled.div`
  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  max-width: 180px;
  padding: 1rem;
`;
const PlaceType = styled.div`
  font-weight: 600;
  font-size: 0.625rem;
  color: #7d7d7d;
`;

const ToDestinationDistance = styled.div`
  font-weight: 700;
  font-size: 0.75rem;
  color: #000000;
`;

const PlaceName = styled.div`
  font-weight: 800;
  font-size: 1.125rem;
  color: #4b0000;
  margin: 0.625rem 0;
`;

const Description = styled.div`
  font-weight: 600;
  font-size: 0.6875rem;
  color: #000000;
  text-align: center;
`;

const FirstLine = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
