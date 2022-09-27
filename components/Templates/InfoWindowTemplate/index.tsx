import React, { useEffect, useState } from "react";
import ImageSlide from "../../modules/ImageSlide/ImageSlide";
import * as A from "../../atoms/InfoWindow/index";
import * as M from "./";
import * as S from "./style";
import Info from "../../modules/InfoWindow/Info/Info";
import MenuTable from "../../modules/InfoWindow/MenuTable/MenuTable";
import FindWay from "../../modules/InfoWindow/FindWay/FindWay";
import PopUpWindow from "../../modules/InfoWindow/PopUpWindow";
import { InfoPropsStateType } from "../../../libs/states/infoWindowState";
import { MdClear } from "react-icons/md";
import { TabState } from "../../../libs/types/infowindow";
import ImageSlideContainer from "../../../container/modules/ImageSlideContainer";
export interface InfoWindowTemplateProps {
  infoProps: InfoPropsStateType;
  tabState: TabState;
  returnPageState: () => void;
}

const InfoWindowTemplate = ({
  tabState,
  infoProps,
  returnPageState,
}: InfoWindowTemplateProps) => {
  let smoothLoopId: { id: number } = { id: -1 };
  const { contentsArgs, menuInfoList } = infoProps;

  return (
    <PopUpWindow
      tabState={tabState}
      id="popUpWindow"
      smoothLoopId={smoothLoopId}
    >
      <S.TopBarWrapper>
        <S.PlaceName>{contentsArgs.placeName}</S.PlaceName>
        <S.CloseIconWrapper
          onClick={() => {
            window.cancelAnimationFrame(smoothLoopId.id);
            returnPageState();
          }}
        >
          <MdClear />
        </S.CloseIconWrapper>
      </S.TopBarWrapper>
      <S.ImageListWrapper id="imageListWrapper">
        <ImageSlideContainer
          instaId={contentsArgs.instaId}
          tabState={tabState}
        />
      </S.ImageListWrapper>
      {tabState.popUpState === "full" ? (
        <>
          <S.InfoWrapper>
            <Info infoList={contentsArgs.infoList} />
            <MenuTable menuInfoList={menuInfoList}></MenuTable>
          </S.InfoWrapper>
          <S.BottomWrapper>
            <FindWay />
          </S.BottomWrapper>
        </>
      ) : (
        <div style={{ height: "100vh" }}> </div>
      )}
    </PopUpWindow>
  );
};

export default InfoWindowTemplate;
