import React from "react";
import * as S from "./style";
import * as I from "../../../atoms/InfoWindow/index";
export interface PlaceInfo {
  title: string;
  content: string;
}
interface InfoWindowContentProps {
  infoList: PlaceInfo[];
}

const Info = ({ infoList }: InfoWindowContentProps) => {
  return (
    <S.ImageTabListWrapper>
      {infoList.map((info, i) => (
        <S.InfoWrapper key={i}>
          <I.SubTitle>{info.title}</I.SubTitle>
          <I.Content content={info.content} />
        </S.InfoWrapper>
      ))}
    </S.ImageTabListWrapper>
  );
};

export default Info;
