import React from "react";
import ImageSlide from "../../modules/ImageSlide/ImageSlide";
import * as A from "../../atoms/InfoWindow/index";
import * as M from "./";
import * as S from "./style";
import { ImageCompProps } from "../../atoms/ImageComp";
import Info from "../../modules/InfoWindow/Info/Info";
import MenuTable from "../../modules/InfoWindow/MenuTable/MenuTable";
import FindWay from "../../modules/InfoWindow/FindWay/FindWay";
import PopUpWindow from "../../modules/InfoWindow/PopUpWindow";
import { ScreenSizeStateType } from "../../../libs/states/infoWindowState";
import ImageTabList from "../../modules/InfoWindow/ImageTabList/ImageTabList";
import { MdClear } from "react-icons/md";
import { VscGrabber } from "react-icons/vsc";
import { TabState } from "../../../libs/types/infowindow";
export interface InfoWindowTemplateProps {
  tabState: TabState;
  infoProps: any;
}

const InfoWindowTemplate = ({
  tabState,
  infoProps,
}: InfoWindowTemplateProps) => {
  const { imageList, contentsArgs, menuInfoList, imageTabList, popUpState } =
    infoProps;
  const { infoList, instagram, placeName } = contentsArgs;
  return (
    <PopUpWindow tabState={tabState}>
      <S.TopBarWrapper>
        <S.PlaceName>{placeName}</S.PlaceName>
        <S.CloseIconWrapper>
          <MdClear />
        </S.CloseIconWrapper>
      </S.TopBarWrapper>
      <S.ImageListWrapper>
        {tabState.popUpState === "full" && (
          <ImageTabList imageTabList={imageTabList} />
        )}
        <ImageSlide imageList={imageList} />
      </S.ImageListWrapper>

      <S.InfoWrapper>
        <Info infoList={infoList} />
        <MenuTable menuInfoList={menuInfoList}></MenuTable>
      </S.InfoWrapper>
      <S.BottomWrapper>
        <FindWay />
      </S.BottomWrapper>
    </PopUpWindow>
  );
};

export default InfoWindowTemplate;
