import React, { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import MapComp from "../../components/atoms/MapComp";
import { markerString } from "../../components/atoms/Marker/PointMarker";
import { getAllPlaceList } from "../../libs/api/place";
import { testImg } from "../../public/image/data64/testImg";
import { markerListSelector } from "../../states/map/map";
import { placeListAtom } from "../../states/place/place";
import { Place } from "../../types/place";

export type MarkerState = {
  src: StaticImageData | HTMLImageElement | string;
  borderColor: string;
  lat: number;
  lng: number;
};

const MapContainer = () => {
  const markerList = useRecoilValue(markerListSelector);
  return <MapComp markerList={markerList} />;
};

export default MapContainer;
