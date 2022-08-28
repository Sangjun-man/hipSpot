import { css } from "@emotion/react";
import React, { useEffect } from "react";
import { testImg } from "../../../public/image/data64/testImg";
import { PointMarkerString, PointMarker } from "../Marker/PointMarker";
import mapboxgl, { GeoJSONSource } from "mapbox-gl"; // or "const mapboxgl = require('mapbox-gl');"
import { clusterLeavesMarker } from "./lib/clusterLeavesInfo";
import { updateMarkers } from "./lib/updateMarkers";
import { ClusterMarkerString, RoundedMarker } from "../Marker/ClusterMarker";
import { renderMarkers } from "./lib/renderMarkers";
import { removeMarkers } from "./lib/removeMarkers";
import { addClusterMarkerEvents } from "../Marker/ClusterMarker/addClusterMarkerEvents";
import { AddPointMarkerEvents } from "../Marker/PointMarker/pointMarkerAddEvents";

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
        map.on("click", (e) => {
          console.log(e.lngLat, e.point);
        });
      });

      const allPointMarkers = {};
      const allClusterMarkers = {};
      const clusterMarkers = {};
      const markersOnScreen = {};
      const clusterMarkersOnScreen = {};
      let source = {};

      map.on("sourcedata", async () => {
        if (!map.isSourceLoaded("placeList")) return;
        source = map.getSource("placeList");
        const allFeatures = source._data.features;
        await (async () => {
          for (const feature of allFeatures) {
            const coords = feature.geometry.coordinates;
            const props = feature.properties;
            const { id, instaId, borderColor, placeName } = props;
            if (!allPointMarkers[id]) {
              // const src = `/images/${instaId}/0.jpg`;
              // const el = document.createElement("div");
              const el = document.createElement("div");
              el.innerHTML = PointMarkerString({
                instaId,
                borderColor,
                placeName,
              });
              // el.appendChild(marker);
              AddPointMarkerEvents(el);
              allPointMarkers[id] = new mapboxgl.Marker({
                element: el,
                anchor: "bottom",
              }).setLngLat(coords);
            }
            if (!allClusterMarkers[id]) {
              const src = `/images/${id}/0.jpg`;
              const el = document.createElement("div");
              el.innerHTML = RoundedMarker(feature);
              allClusterMarkers[id] = new mapboxgl.Marker({
                element: el,
              }).setLngLat(coords);
            }
          }
        })();

        // await (async () => {
        //   console.log(allPointMarkers, allClusterMarkers);
        // })();
      });

      map.on("render", async () => {
        if (!map.isSourceLoaded("placeList")) return;
        if (!allPointMarkers[Object.keys(allPointMarkers).length - 1]) {
          // console.log("allPointMarkers");
          return;
        }

        const { newMarkers, newClusterMarkers } = await updateMarkers({
          map,
          allPointMarkers,
          clusterMarkers,
          source,
        });

        await renderMarkers({
          map,
          newMarkers,
          newClusterMarkers,
          allPointMarkers,
          clusterMarkers,
          markersOnScreen,
          clusterMarkersOnScreen,
        });
        // await (async () =>
        //   console.log(
        //     newMarkers,
        //     newClusterMarkers,
        //     markersOnScreen,
        //     clusterMarkersOnScreen
        //   ))();
        await removeMarkers({
          newMarkers,
          newClusterMarkers,
          markersOnScreen,
          clusterMarkersOnScreen,
        });
      });
    }
  });

  return (
    <div
      id="map"
      css={css`
        width: 100%;
        height: 100%;
        position: absolute;
      `}
    />
  );
};

export default MapComp;
