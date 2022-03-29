import React, { useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import MainTemplate from "../../../../components/Templates/MainTemplate";
import { filterStateAtom } from "../../../../states/filter/filter";
import { getFilterList } from "../../../../libs/api/filter";
import { FilterState } from "../../../../types/type";

const MainContainer = () => {
  const [filterState, setFilterState] = useRecoilState(filterStateAtom);

  useEffect(() => {
    const fetchData = async () => {
      const res: FilterState = await getFilterList();
      setFilterState(res);
    };
    fetchData();
  }, []);

  return <MainTemplate filterState={filterState} />;
};

export default MainContainer;
