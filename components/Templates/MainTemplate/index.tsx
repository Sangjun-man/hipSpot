import styled from "@emotion/styled";
import React from "react";
import MapContainer from "../../../container/modules/MapContainer";
import MapComp from "../../atoms/MapComp";
import FilterButtonList from "../../modules/FilterButtonList";
import FilterListWindow from "../FilterListWindowTemplate";
import PlaceCard from "../../modules/PlaceCard";
import FilterListWindowTemplate from "../FilterListWindowTemplate";
import FilterListWindowTemplateContainer from "../../../container/Templates/FilterListWindowTemplateContainer";
import { ActiveFilterList, ActiveFilterState } from "../../../types/type";

interface MainTemplateType {
  activeFilterList: ActiveFilterList;
  // isPlaceCardOpen: boolean;
  isFilterListOpen: boolean;
}

const card = {
  src: "/image/testImg.png",
  alt: "스토오오리북",
  placeType: "팝업스토어 / 집",
  distance: 69,
  placeName: "우리집",
  description: ["태릉입구와 먹골역 화랑대역 사이에 있는", "서울 묵동 77-31"],
};

const MainTemplate = ({
  isFilterListOpen,
  activeFilterList,
}: MainTemplateType) => {
  const { src, alt, placeType, distance, placeName, description } = card;
  return (
    <MainLayout>
      <MapContainer />
      <FilterButtonList
        isFilterListOpen={isFilterListOpen}
        filterArray={activeFilterList}
        displayActive={true}
      />
      <FilterListWindowTemplateContainer />

      <PlaceCard
        src={src}
        alt={alt}
        placeType={placeType}
        placeName={placeName}
        distance={distance}
        description={description}
      />
    </MainLayout>
  );
};

export default MainTemplate;

const MainLayout = styled.div`
  width: 100vw;
  height: 100vh;
  max-width: 1200px;
  margin: auto;
`;
