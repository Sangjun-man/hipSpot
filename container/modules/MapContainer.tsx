import React, { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import MapComp from "../../components/atoms/MapComp/mapBoxGl";
import { PointMarkerString } from "../../components/atoms/Marker/PointMarker";
import { getAllPlaceList } from "../../libs/api/place";
import { testImg } from "../../public/image/data64/testImg";
import { geoJsonAtom, markerListSelector } from "../../libs/states/map/map";
import { placeListAtom } from "../../libs/states/place/place";
import { StaticImageData } from "next/image";

export type MarkerState = {
  src: StaticImageData | HTMLImageElement | string;
  borderColor: string;
  lat: number;
  lng: number;
};

const MapContainer = () => {
  const markerList = useRecoilValue(markerListSelector);
  const geoJson = useRecoilValue(geoJsonAtom);
  return <MapComp markerList={markerList} placeListGeoJson={geoJson} />;
};

export default MapContainer;
