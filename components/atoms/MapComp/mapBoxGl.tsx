import { css } from "@emotion/react";
import React, { useEffect, useRef } from "react";
import { PointMarkerString, PointMarker } from "../Marker/PointMarker";
import mapboxgl, { DragPanHandler, GeoJSONSource, Map } from "mapbox-gl"; // or "const mapboxgl = require('mapbox-gl');"
import { updateMarkers } from "./lib/render/updateMarkers";
import { RoundedMarker } from "../Marker/ClusterMarker";
import { renderMarkers } from "./lib/render/renderMarkers";
import { removeMarkers } from "./lib/render/removeMarkers";
import { AddPointMarkerEvents } from "../Marker/PointMarker/pointMarkerAddEvents";
import { clickPointMarker } from "./lib/click/clickPointMarker";
import { useRecoilState, useSetRecoilState } from "recoil";
import {
  infoPropsStateAtom,
  tabStateAtom,
} from "../../../libs/states/infoWindowState";
import { cameraStateAtom, CameraStateType } from "../../../libs/states/map/map";
import { dragEventHandler } from "./lib/drag/dragEventHandler";

export interface MapCompProps {
  markerList: Array<any>;
  placeListGeoJson: Array<any>;
}

const MapComp = ({ markerList = [], placeListGeoJson = [] }: MapCompProps) => {
  const setInfoProps = useSetRecoilState(infoPropsStateAtom);
  const [tabState, setTabState] = useRecoilState(tabStateAtom);
  const [cameraState, setCameraState] = useRecoilState(cameraStateAtom);
  const mapRef = useRef<Map | undefined>(undefined);
  const cameraRef = useRef<CameraStateType>({
    center: [127.0582071, 37.5447481],
    pitch: 0,
    bearing: 0,
    markerClicked: false,
    zoom: 17,
  });

  useEffect(() => {
    console.log(process.env);
    mapboxgl.accessToken = `pk.eyJ1Ijoic2FuZ2p1biIsImEiOiJjbDVnN3cxN20xaWlyM2psd3RwN2ZxeTVuIn0.AUYaeDWIJPHG62nFTNO49w`;
    if (!mapboxgl.supported())
      alert(
        "mapbox지도를 지원하지 않는 브라우저입니다, 다른 브라우저로 접속해주세요"
      );

    if (document.getElementById("map")!.childNodes.length <= 0) {
      console.log("mapLoad");
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

      map.on("dragend", (e) => {
        if (!cameraRef.current.markerClicked) {
          // console.log("dragend", e.target.getCenter());
          cameraRef.current = {
            ...cameraRef.current,
            ...dragEventHandler(e, cameraRef),
          };
          setCameraState(cameraRef.current);
        }
      });

      map.on("load", () => {
        mapRef.current = map;
        // console.log("mapbox geoJSON :", placeListGeoJson);
        map.addSource("placeList", {
          type: "geojson",
          data: placeListGeoJson,
          cluster: true,
          // clusterMinPoints: 10,
          clusterMaxZoom: 16,
          clusterRadius: 60,
        });

        map.addLayer({
          id: "placeList",
          type: "circle",
          source: "placeList",
          // filter: ["has", "point_count"],
          paint: {
            "circle-opacity": 0,
          },
        });

        clickPointMarker({
          map,
          sourceId: "placeList",
          clusterLayerId: "placeList",
          setInfoProps,
          tabState,
          setTabState,
          cameraState,
          setCameraState,
          cameraRef,
        });
      });

      const allPointMarkers = {};
      const allClusterMarkers = {};
      const clusterMarkers = {};
      const markersOnScreen = {};
      const clusterMarkersOnScreen = {};
      let source = {};

      map.on("sourcedata", async () => {
        // console.log("sourcedata");
        if (!map.isSourceLoaded("placeList")) return;
        if (allPointMarkers[0] && allClusterMarkers[0]) return;
        // console.log("placeListLoaded");

        source = map.getSource("placeList");
        const allFeatures = source._data.features;
        await (async () => {
          console.log("makemarker");
          for (const feature of allFeatures) {
            // console.log("feature", feature);
            const coords = feature.geometry.coordinates;
            const props = feature.properties;
            const { id, instaId, borderColor, placeName } = props;
            if (!allPointMarkers[id]) {
              const el = document.createElement("div");
              el.innerHTML = PointMarkerString({
                instaId,
                borderColor,
                placeName,
              });
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
          // console.log(allClusterMarkers, allPointMarkers);
        })();
      });

      map.on("render", async () => {
        if (!map.isSourceLoaded("placeList")) return;
        if (!allPointMarkers[Object.keys(allPointMarkers).length - 1]) {
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
        await removeMarkers({
          newMarkers,
          newClusterMarkers,
          markersOnScreen,
          clusterMarkersOnScreen,
        });
      });
    }
  });

  useEffect(() => {
    const map = mapRef.current;
    if (!map) {
      return;
    }

    const { pitch, bearing, center, markerClicked, zoom } = cameraState;
    // console.log("cameraState 변경 :", cameraState);

    map.flyTo({
      pitch,
      bearing,
      center,
      duration: 500,
      zoom,
    });

    cameraRef.current = {
      ...cameraState,
    };
  }, [cameraState]);
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
