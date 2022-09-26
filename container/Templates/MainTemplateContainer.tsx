import React, { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import MainTemplate from "../../components/Templates/MainTemplate";
import {
  activeFilterListSelector,
  filterListAtom,
  placeTypeActiveFilterListSelector,
} from "../../libs/states/filter/filter";
import { getFilterList } from "../../libs/api/filter";
import { filterListToActiveList } from "../../libs/states/filterListToActivrList";
import { getAllPlaceList } from "../../libs/api/place";
import { getGeoJson } from "../../libs/api/map";
import { placeListAtom } from "../../libs/states/place/place";
import { geoJsonAtom } from "../../libs/states/map/map";
import { FilterList } from "../../libs/types/type";
import { Place } from "../../libs/types/place";
import {
  screenSizeStateAtom,
  tabStateAtom,
} from "../../libs/states/infoWindowState";
import NotFound from "../../pages/notFound";
const MainContainer = () => {
  //main container의 useEffect 먼저 체크
  const [isInit, setIsinit] = useState<boolean>(false);
  //ui 관련 states
  // const [isFilterListOpen, setIsFilterListOpen] = useState<boolean>(false);
  // const [isPlaceCardOpen, setIsPlaceCardOpen] = useState<boolean>(false);
  // const [filterList, setFilterList] = useRecoilState(filterListAtom); //메인 템플릿에서 useEffect로 필터링 List 요청
  // const [activeFilterList, setActiveFilterList] = useRecoilState(
  //   activeFilterListSelector
  // );
  const [screenSizeState, setScreenSizeState] =
    useRecoilState(screenSizeStateAtom);
  const [placeList, setPlaceList] = useRecoilState<Array<Place>>(placeListAtom);
  const [geoJson, setGeoJson] = useRecoilState<any>(geoJsonAtom);
  const categories = useRecoilValue(
    placeTypeActiveFilterListSelector("categories")
  );
  const items = useRecoilValue(placeTypeActiveFilterListSelector("items"));

  // map 관련 state
  useEffect(() => {
    const screenSize = async () => {
      const { innerHeight, innerWidth } = window;
      window.addEventListener("resize", (e) => {
        setScreenSizeState({
          innerHeight,
          innerWidth,
        });
      });
      setScreenSizeState({
        innerWidth,
        innerHeight,
      });
      return { innerHeight, innerWidth };
    };

    const fetchData = async () => {
      const placeList: Array<Place> = await getAllPlaceList();
      setPlaceList(placeList);
      const geoJson = await getGeoJson();
      const placeListGeoJson = {
        type: "FeatureCollection",
        crs: {
          type: "name",
          properties: {
            name: "urn:ogc:def:crs:OGC:1.3:CRS84",
          },
        },
        features: geoJson,
      };
      setGeoJson(placeListGeoJson);
    };

    (async () => {
      await fetchData();
      await screenSize();
      await (async () => {
        setIsinit(true);
      })();
    })();
  }, []);

  if (!isInit) {
    return <NotFound></NotFound>;
  }
  return <MainTemplate />;
};

export default MainContainer;
