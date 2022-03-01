import { css } from "@emotion/react";
import React, { useEffect } from "react";
import { MapWrapper } from "./style";

const NaverMap = () => {
  useEffect(() => {
    const mapOptions = {
      center: new naver.maps.LatLng(37.3595704, 127.105399),
      zoom: 10,
    };
    const map = new naver.maps.Map("map", mapOptions);
  });

  return (
    <>
      <MapWrapper id="map"></MapWrapper>
    </>
  );
};

export default NaverMap;
