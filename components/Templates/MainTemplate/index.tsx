import styled from "@emotion/styled";
import React from "react";
import MapContainer from "../../../container/modules/MapContainer";
import MapComp from "../../atoms/MapComp/naverMap";
import FilterButtonList from "../../modules/FilterButtonList";
import FilterListWindow from "../FilterListWindowTemplate";
import PlaceCard from "../../modules/PlaceCard";
import FilterListWindowTemplate from "../FilterListWindowTemplate";
import FilterListWindowTemplateContainer from "../../../container/Templates/FilterListWindowTemplateContainer";
import { ActiveFilterList, ActiveFilterState } from "../../../types/type";
import InfoWindowContainer from "../../../container/Templates/InfoWindowTemplateContainer";
import * as S from "./style";
interface MainTemplateType {
  // activeFilterList: ActiveFilterList;
  // // isPlaceCardOpen: boolean;
  // isFilterListOpen: boolean;
}

const card = {
  src: "/image/testImg.png",
  alt: "스토오오리북",
  placeType: "팝업스토어 / 집",
  distance: 69,
  placeName: "우리집",
  description: ["태릉입구와 먹골역 화랑대역 사이에 있는", "서울 묵동 77-31"],
};

const MainTemplate = ({}: MainTemplateType) => {
  // const { src, alt, placeType, distance, placeName, description } = card;
  return (
    <S.MainTemplateLayout>
      <MapContainer />
    </S.MainTemplateLayout>
  );
};

export default MainTemplate;
