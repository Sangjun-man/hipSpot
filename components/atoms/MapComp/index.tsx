import { css } from "@emotion/react";
import React, { useEffect } from "react";

const MapComp = () => {
  useEffect(() => {
    const mapOptions = {
      center: new naver.maps.LatLng(37.3595704, 127.105399),
      zoom: 10,
    };
    const map = new naver.maps.Map("map", mapOptions);
  });

  return (
    <>
      <div id="map" css={mapStyle}></div>
    </>
  );
};

export default MapComp;

const mapStyle = css`
  width: 100%;
  height: 100%;
`;
