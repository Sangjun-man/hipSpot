import React from "react";
import * as S from "./style";
import * as I from "../../../atoms/InfoWindow/index";
import { PlaceInfo } from "../../../../libs/states/infoWindowState";
interface InfoWindowContentProps {
  infoList: PlaceInfo[];
}

const Info = ({ infoList }: InfoWindowContentProps) => {
  return (
    <S.InfoListWrapper>
      {infoList.map((info, i) => (
        <S.InfoWrapper key={i}>
          <I.SubTitle>{info.title}</I.SubTitle>
          <I.Content content={info.content} />
        </S.InfoWrapper>
      ))}
    </S.InfoListWrapper>
  );
};

export default Info;
