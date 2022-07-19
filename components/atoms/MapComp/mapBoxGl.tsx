import { css } from "@emotion/react";
import React, { useEffect } from "react";
import { testImg } from "../../../public/image/data64/testImg";
import { markerString, PointMarker } from "../Marker/PointMarker";
import mapboxgl from "mapbox-gl"; // or "const mapboxgl = require('mapbox-gl');"
import { clusterLeavesMarker } from "./lib/clusterLeavesInfo";
import { updateMarkers } from "./lib/updateMarkers";

export interface MapCompProps {
  markerList: Array<any>;
  placeListGeoJson: Array<any>;
}

const MapComp = ({ markerList = [], placeListGeoJson = [] }: MapCompProps) => {
  useEffect(() => {
    mapboxgl.accessToken = `${process.env.MAPBOX_MAP_ALL_ACCESS_TOKKEN}`;
    if (!mapboxgl.supported())
      alert(
        "mapbox지도를 지원하지 않는 브라우저입니다, 다른 브라우저로 접속해주세요"
      );

    if (document.getElementById("map")!.childNodes.length <= 0) {
      const map = new mapboxgl.Map({
        container: "map",
        style: "mapbox://styles/mapbox/streets-v11",
        center: [127.0582071, 37.5447481],
        zoom: 17,
        maxZoom: 18,
        minZoom: 13,
        maxBounds: [
          [127.03, 37.53],
          [127.07, 37.56],
        ],
        projection: {
          name: "lambertConformalConic",
          parallels: [36, 35],
        },
      });

      map.on("load", () => {
        map.addSource("placeList", {
          type: "geojson",
          data: placeListGeoJson,
          cluster: true,
          // clusterMinPoints: 10,
          clusterMaxZoom: 17,
          clusterRadius: 60,
        });
        map.addLayer({
          id: "placeList_circle",
          type: "circle",
          source: "placeList",
          filter: ["has", "point_count"],
          paint: {
            "circle-opacity": 0,
          },
        });

        clusterLeavesMarker({
          map,
          sourceId: "placeList",
          clusterLayerId: "placeList_circle",
        });

        // map.addLayer({
        //   id: "cluster-count",
        //   type: "symbol",
        //   source: "placeList",
        //   filter: ["has", "point_count"],
        //   layout: {
        //     "text-field": "{point_count_abbreviated}",
        //     "text-font": ["DIN Offc Pro Medium", "Arial Unicode MS Bold"],
        //     "text-size": 12,
        //   },
        // });
        // map.addLayer({
        //   id: "unclustered-point",
        //   type: "circle",
        //   source: "placeList",
        //   filter: ["!", ["has", "point_count"]],
        //   paint: {
        //     "circle-color": "#11b4da",
        //     "circle-radius": 4,
        //     "circle-stroke-width": 1,
        //     "circle-stroke-color": "#fff",
        //     "circle-translate":[20,-20]
        //   },
        // });
      });
      // map.on("wheel", () => {
      //   console.log(map.getZoom());
      // })
      // objects for caching and keeping track of HTML marker objects (for performance)
      const markers = {};
      const markersOnScreen = {};
      const clusterMarkers = {};
      const clusterMarkersOnScreen = {};
      // after the GeoJSON data is loaded, update markers on the screen on every frame
      map.on("render", async () => {
        // console.log("render");

        if (!map.isSourceLoaded("placeList")) return;
        // console.log(
        const { newMarkers, newClusterMarkers } = await updateMarkers({
          map,
          markers,
          markersOnScreen,
          clusterMarkers,
          clusterMarkersOnScreen,
        });
        // );
        // console.log("updateEnd");
        const update = async () => {
          markersOnScreen = { ...newMarkers };
          clusterMarkersOnScreen = { ...newClusterMarkers };
        };
        await update();
        // await (async () => {
        //   console.log("renderEnd");
        // })();
      });
    }
  });

  return (
    <div css={mapStyle}>
      <div
        id="map"
        css={css`
          width: 100%;
          max-width: 1200px;
          height: 100%;
          position: absolute;
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
