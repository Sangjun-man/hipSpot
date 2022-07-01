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
import { getGeocode } from "../../libs/api/map";

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
  const categories = useRecoilValue(
    placeTypeActiveFilterListSelector("categories")
  );
  const items = useRecoilValue(placeTypeActiveFilterListSelector("items"));

  // map 관련 state
  useEffect(() => {
    const fetchData = async () => {
      const res: FilterList = await getFilterList();
      const { categories, items } = res;
      // setFilterList({ categories, items });
    };

    const mainContainerInit = async () => {
      await fetchData();
      await (async () => {
        const place = await getAllPlaceList();
        console.log(place);
      })();
      await (async () => {
        const place = await getGeocode();
        console.log(place);
      })();
      await (async () => {
        setIsinit(true);
      })();
    };
    mainContainerInit();
  }, []);

  return (
    <MainTemplate
      activeFilterList={activeFilterList}
      isFilterListOpen={isFilterListOpen}
    />
  );
};

export default MainContainer;
