import React from "react";
import * as S from "./style";
import * as I from "../../../atoms/InfoWindow/index";
export interface PlaceInfo {
  name: string;
  selected: boolean;
}
interface InfoWindowContentProps {
  imageTabList: PlaceInfo[];
}

const ImageTabList = ({ imageTabList }: InfoWindowContentProps) => {
  return (
    <S.ImageTabListWrapper>
      {imageTabList.map((tab, i) => (
        <S.TabWrapper key={i}>
          <I.Tab name={tab.name} selected={tab.selected} />
        </S.TabWrapper>
      ))}
    </S.ImageTabListWrapper>
  );
};

export default ImageTabList;
