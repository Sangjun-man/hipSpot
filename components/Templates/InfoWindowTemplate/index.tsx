import React, { useEffect } from "react";
import ImageSlide from "../../modules/ImageSlide/ImageSlide";
import * as A from "../../atoms/InfoWindow/index";
import * as M from "./";
import * as S from "./style";
import { ImageCompProps } from "../../atoms/ImageComp";
import Info from "../../modules/InfoWindow/Info/Info";
import MenuTable from "../../modules/InfoWindow/MenuTable/MenuTable";
import FindWay from "../../modules/InfoWindow/FindWay/FindWay";
import PopUpWindow from "../../modules/InfoWindow/PopUpWindow";
import {
  screenSizeStateAtom,
  ScreenSizeStateType,
  tabStateAtom,
} from "../../../libs/states/infoWindowState";
import ImageTabList from "../../modules/InfoWindow/ImageTabList/ImageTabList";
import { MdClear } from "react-icons/md";
import { VscGrabber } from "react-icons/vsc";
import { TabState } from "../../../libs/types/infowindow";
import { useRecoilState, useRecoilValue } from "recoil";
export interface InfoWindowTemplateProps {
  infoProps: any;
}

const InfoWindowTemplate = ({ infoProps }: InfoWindowTemplateProps) => {
  const [tabState, setTabState] = useRecoilState<TabState>(tabStateAtom);
  const screesSizeState = useRecoilValue(screenSizeStateAtom);

  const { imageList, contentsArgs, menuInfoList, imageTabList, popUpState } =
    infoProps;
  const { infoList, instagram, placeName } = contentsArgs;
  return (
    <PopUpWindow tabState={tabState} id="popUpWindow">
      <S.TopBarWrapper>
        <S.PlaceName>{placeName}</S.PlaceName>
        <S.CloseIconWrapper
          onClick={() => {
            const returnTabState: TabState = {
              ...tabState,
              top: screesSizeState.innerHeight - 30,
              popUpState: "thumbNail",
            };
            setTabState(returnTabState);
          }}
        >
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
