import React, { useEffect, useState } from "react";
import MainTemplate from "../../components/Templates/MainTemplate";
import {
  activeFilterListAtom,
  activeFilterListSelector,
  filterListAtom,
  filterStateAtom,
  placeTypeActiveFilterListSelector,
} from "../../states/filter/filter";
import { getFilterList } from "../../libs/api/filter";
import { FilterList } from "../../types/type";
import { useRecoilState, useRecoilValue } from "recoil";
import { filterListToActiveList } from "../../libs/states/filterListToActivrList";
import { getAllPlaceList } from "../../libs/api/place";
import { getGeoJson } from "../../libs/api/map";
import { Place } from "../../types/place";
import { placeListAtom } from "../../states/place/place";
import { geoJsonAtom } from "../../states/map/map";

const MainContainer = () => {
  //main container의 useEffect 먼저 체크
  const [isInit, setIsinit] = useState<boolean>(false);
  //ui 관련 states
  const [isFilterListOpen, setIsFilterListOpen] = useState<boolean>(false);
  const [isPlaceCardOpen, setIsPlaceCardOpen] = useState<boolean>(false);
  const [filterList, setFilterList] = useRecoilState(filterListAtom); //메인 템플릿에서 useEffect로 필터링 List 요청
  const [activeFilterList, setActiveFilterList] = useRecoilState(
    activeFilterListSelector
  );
  const [placeList, setPlaceList] = useRecoilState<Array<Place>>(placeListAtom);
  const [geoJson, setGeoJson] = useRecoilState(geoJsonAtom);
  const categories = useRecoilValue(
    placeTypeActiveFilterListSelector("categories")
  );
  const items = useRecoilValue(placeTypeActiveFilterListSelector("items"));

  // map 관련 state
  useEffect(() => {
    const fetchData = async () => {
      const filterList: FilterList = await getFilterList();
      const { categories, items } = filterList;
      setFilterList({ categories, items });
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
      console.log(geoJson);
      console.log(placeList);
    };

    const mainContainerInit = async () => {
      await fetchData();
      await (async () => {})();
      await (async () => {
        setIsinit(true);
      })();
    };
    mainContainerInit();
  }, []);

  if (!isInit) {
    return <div></div>;
  }
  if (isInit) {
    return (
      <MainTemplate
        activeFilterList={activeFilterList}
        isFilterListOpen={isFilterListOpen}
      />
    );
  }
};

export default MainContainer;
