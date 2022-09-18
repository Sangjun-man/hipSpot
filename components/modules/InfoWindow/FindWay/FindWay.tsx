import React from "react";
import * as S from "./style";
import * as I from "../../../atoms/InfoWindow/index";
import Button from "../../../atoms/Button";
export interface PlaceInfo {
  name: string;
  selected: boolean;
}
interface InfoWindowContentProps {}

const FindWay = ({}: InfoWindowContentProps) => {
  return (
    <S.FindWayWrapper>
      <I.Title> 길찾기 </I.Title>
      <S.ButtonWrapper>
        <Button color="#03C75A">네이버 길찾기</Button>
        <Button color="#FEE500" fontColor="#191919">
          카카오 길찾기
        </Button>
      </S.ButtonWrapper>
    </S.FindWayWrapper>
  );
};

export default FindWay;
