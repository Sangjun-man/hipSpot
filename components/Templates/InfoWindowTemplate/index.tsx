import { css } from "@emotion/react";
import React from "react";
import Button from "../../atoms/Button";
import PlaceName from "../../atoms/InfoWindow/Title";
import ImageSlide from "../../modules/ImageSlide/ImageSlide";
import InfoWindowContents from "../../modules/InfoWindow/Info/Info";
import InfoWindowTitle from "../../modules/InfoWindow/InfoWindowTitle";
import * as C from "../../atoms/InfoWindow/index";
import * as S from "./style";

const titleArgs = {
  name: "시몬스 그로서리 스토어",
  hashTag: ["시몬스", "침대", "편해요?"],
};
const contentsArgs = {
  infoList: [
    { title: "영업시간", content: "월~일 10:00 - 19:00" },
    { title: "주소", content: "사랑시 고백구 행복동" },
    { title: "전화번호", content: "010-7272-8403" },
  ],
  instagram: "sa_ng_ju_n2",
};

const imageList = [
  { src: "/image/testImg.png" },
  { src: "/image/testImg2.png" },
  { src: "/image/testImg3.png" },
  { src: "/image/testImg.png" },
  { src: "/image/testImg2.png" },
  { src: "/image/testImg3.png" },
  { src: "/image/testImg.png" },
  { src: "/image/testImg2.png" },
  { src: "/image/testImg3.png" },
];

const InfoWindowTemplate = () => {
  const { name, hashTag } = titleArgs;
  const { infoList, instagram } = contentsArgs;
  return (
    <S.InfoWindowLayout>
      <S.InfoWindowWrapper>
        <C.Title name="상준" />
        {/* {ImageTabstate && <C.Tab />} */}
        <ImageSlide imageList={imageList} size={400} />
        <C.Menu title="menu"></C.Menu>
        <Button>길찾기</Button>
        <Button>길찾기</Button>
      </S.InfoWindowWrapper>
    </S.InfoWindowLayout>
  );
};

export default InfoWindowTemplate;
