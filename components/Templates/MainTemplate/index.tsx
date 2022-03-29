import styled from "@emotion/styled";
import React from "react";
import { FilterState } from "../../../types/type";
import MapComp from "../../atoms/MapComp";
import FilterButtonList from "../../modules/FilterButtonList";
import PlaceCard from "../../modules/PlaceCard";

interface MainTemplateType {
  filterState: FilterState;
}

const filterList = [
  "heelll",
  "lllloooww",
  "teeee ",
  "ssstt",
  "heelll",
  "lllloooww",
  "teeee ",
  "ssstt",
  "heelll",
  "lllloooww",
  "teeee ",
  "ssstt",
];

const card = {
  src: "/image/testImg.png",
  alt: "스토오오리북",
  placeType: "팝업스토어 / 집",
  distance: 69,
  placeName: "우리집",
  description: ["태릉입구와 먹골역 화랑대역 사이에 있는", "서울 묵동 77-31"],
};

const MainTemplate = ({ filterState }: MainTemplateType) => {
  const { src, alt, placeType, distance, placeName, description } = card;
  return (
    <MainLayout>
      <MapComp />
      <FilterButtonList filterList={filterList} />
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
