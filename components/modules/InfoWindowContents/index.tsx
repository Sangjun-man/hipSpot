import styled from "@emotion/styled";
import React from "react";
import { PopOutArrow } from "../../../public/svg";
import Button from "../../atoms/Button";
import PlaceInfoContent from "../../atoms/InfoWindow/Content";
import PlaceInfoSubject from "../../atoms/InfoWindow/Menu";
import PlaceInfoWrapper from "../../atoms/InfoWindow/Wrapper";
import { css } from "@emotion/react";

export interface PlaceInfo {
  title: string;
  content: string;
}
interface InfoWindowContentProps {
  infoList: PlaceInfo[];
}

const InfoWindowContents = ({ infoList }: InfoWindowContentProps) => {
  return (
    <PlaceInfoWrapper>
      {infoList.map((info: PlaceInfo, i: number) => (
        <div key={i}>
          <PlaceInfoSubject title={info.title} />
          <PlaceInfoContent content={info.content} />
        </div>
      ))}
      <ButtonWrapper>
        <Button>
          길찾기
          <PopOutArrow />
        </Button>
      </ButtonWrapper>
    </PlaceInfoWrapper>
  );
};

export default InfoWindowContents;

const ButtonWrapper = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  transform: translateX(1.5rem);
`;
