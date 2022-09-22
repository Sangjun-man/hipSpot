import { stringify } from "querystring";
import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { ImageCompProps } from "../../components/atoms/ImageComp";
import InfoWindowTemplate from "../../components/Templates/InfoWindowTemplate";
import {
  infoPropsStateAtom,
  InfoPropsStateType,
  screenSizeStateAtom,
  tabStateAtom,
} from "../../libs/states/infoWindowState";
import { TabState } from "../../libs/types/infowindow";

const initInfoProps: InfoPropsStateType = {
  contentsArgs: {
    placeName: "여기엔 가게 이름이 표시됩니다",
    infoList: [
      { title: "영업시간", content: "월~일 10:00 - 19:00" },
      { title: "주소", content: "사랑시 고백구 행복동" },
      { title: "전화번호", content: "010-7272-8403" },
    ],
    instaId: "@4fbhouse",
  },
  menuInfoList: [
    { menu: "아이스 아메리카노", price: 5000 },
    { menu: "아이스 카페라떼", price: 9.5 },
    { menu: "아이스 카푸치노", price: "5000원" },
  ],
};

function InfoWindowContainer() {
  const [init, setInit] = useState<boolean>(false);
  const [screenSizeState, setScreenSizeState] =
    useRecoilState(screenSizeStateAtom);
  const [tabState, setTabState] = useRecoilState<TabState>(tabStateAtom);
  const [infoProps, setInfoProps] = useRecoilState<any>(infoPropsStateAtom);

  useEffect(() => {
    // console.log("infoWindowRender");
    const tabState = async ({
      innerHeight,
      innerWidth,
    }: {
      innerHeight: number;
      innerWidth: number;
    }) => {
      return setTabState({
        onHandling: false,
        top: innerHeight - 30,
        popUpState: "thumbNail",
      });
    };

    const init = async () => {
      setInfoProps(initInfoProps);
      setInit(true);
    };

    (async () => {
      await tabState(screenSizeState);
      await init();
    })();
  }, []);

  if (!init) return <div></div>;
  return (
    <InfoWindowTemplate
      infoProps={infoProps}
      tabState={tabState}
      setTabState={setTabState}
      screenSizeState={screenSizeState}
    />
  );
}

export default InfoWindowContainer;
