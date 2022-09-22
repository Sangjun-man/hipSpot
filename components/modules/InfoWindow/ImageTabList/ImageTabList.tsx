import React, { MouseEventHandler } from "react";
import * as S from "./style";
import * as I from "../../../atoms/InfoWindow/index";
import { ImageTabListType } from "../../../../libs/states/infoWindowState";

interface InfoWindowContentProps {
  imageTabList: ImageTabListType[];
  onChangeImageTab: (type: string) => void;
}

const ImageTabList = ({
  imageTabList,
  onChangeImageTab,
}: InfoWindowContentProps) => {
  // console.log("imageTabList 전달값 :", imageTabList);
  return (
    <S.ImageTabListWrapper>
      {imageTabList.map((tab, i) => (
        <S.TabWrapper key={i}>
          <I.Tab
            name={tab.name}
            selected={tab.selected}
            type={tab.type}
            onChangeImageTab={onChangeImageTab}
          />
        </S.TabWrapper>
      ))}
    </S.ImageTabListWrapper>
  );
};

export default ImageTabList;
