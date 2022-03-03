import { css } from "@emotion/react";
import React from "react";
import Button from "../../atoms/Button";
import { InfoWindowLayout, MainLayout } from "../../layouts";
import InfoWindowContents from "../../modules/InfoWindowContents";
import InfoWindowTitle from "../../modules/InfoWindowTitle";

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

const InfoWindowTemplate = () => {
  const { name, hashTag } = titleArgs;
  const { infoList, instagram } = contentsArgs;

  return (
    <MainLayout>
      <InfoWindowLayout>
        <InfoWindowTitle name={name} hashTag={hashTag} />
        <div css={giveBackgroudColor}>
          <InfoWindowContents infoList={infoList} />
        </div>
        <div>인스타들어갈예정</div>
        <Button theme="secondary">@{instagram}</Button>
      </InfoWindowLayout>
    </MainLayout>
  );
};

export default InfoWindowTemplate;

const giveBackgroudColor = css`
  background-color: rgba(255, 234, 240, 0.12);
`;
