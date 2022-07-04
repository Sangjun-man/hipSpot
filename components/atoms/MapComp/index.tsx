import { css } from "@emotion/react";
import React, { useEffect } from "react";
import { testImg } from "../../../public/image/data64/testImg";
import { markerString } from "../Marker/PointMarker";

export interface MapCompProps {
  markerList: Array<any>;
}

const MapComp = ({ markerList = [] }: MapCompProps) => {
  useEffect(() => {
    if (document.getElementById("map")!.childNodes.length <= 0) {
      const mapOptions = {
        center: new naver.maps.LatLng(37.3595704, 127.105399),
        zoom: 10,
      };
      const map = new naver.maps.Map("map", mapOptions);
      if (markerList.length) {
        for (let i = 0; i < markerList.length; i++) {
          if (markerList[i].mapData) {
            const { lat, lng } = markerList[i].mapData;
            const { src = testImg, borderColor = "#A58261" } = markerList[i];
            // console.log(lat, lng, src, borderColor);
            new naver.maps.Marker({
              position: new naver.maps.LatLng(lat, lng),
              map: map,
              icon: {
                content: markerString({ src, borderColor }),
                size: new naver.maps.Size(80, 80),
                anchor: new naver.maps.Point(30, 68),
              },
            });
          }
        }
      }
    }
  });

  return (
    <div css={mapStyle}>
      <div
        id="map"
        css={css`
          width: 100%;
          height: 100%;
        `}
      />
    </div>
  );
};

export default MapComp;

const mapStyle = css`
  position: fixed;
  width: 100%;
  height: 100%;
`;
