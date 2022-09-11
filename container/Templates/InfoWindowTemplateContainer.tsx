import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { ImageCompProps } from "../../components/atoms/ImageComp";
import InfoWindowTemplate from "../../components/Templates/InfoWindowTemplate";
import {
  screenSizeStateAtom,
  tabStateAtom,
} from "../../libs/states/infoWindowState";
import { TabState } from "../../libs/types/infowindow";

const popUpState = ["thumNail", "half", "full"];
const initInfoProps = {
  contentsArgs: {
    placeName: "시몬스 그로서리 스토어",
    infoList: [
      { title: "영업시간", content: "월~일 10:00 - 19:00" },
      { title: "주소", content: "사랑시 고백구 행복동" },
      { title: "전화번호", content: "010-7272-8403" },
    ],
    instagram: "sa_ng_ju_n2",
  },

  imageList: [
    { src: "/image/testImg.png" },
    { src: "/image/testImg2.png" },
    { src: "/image/testImg3.png" },
    { src: "/image/testImg.png" },
    { src: "/image/testImg2.png" },
    { src: "/image/testImg3.png" },
    { src: "/image/testImg.png" },
    { src: "/image/testImg2.png" },
    { src: "/image/testImg3.png" },
  ],
  menuInfoList: [
    { menu: "아이스 아메리카노", price: 5000 },
    { menu: "아이스 카페라떼", price: 9.5 },
    { menu: "아이스 카푸치노", price: "5000원" },
  ],
  imageTabList: [
    { name: "내부사진", selected: false },
    { name: "외부사진", selected: true },
    { name: "메뉴", selected: false },
    { name: "메뉴", selected: false },
    { name: "메뉴", selected: false },
    { name: "메뉴", selected: false },
    { name: "메뉴", selected: false },
    { name: "메뉴", selected: false },
    { name: "메뉴", selected: false },
    { name: "메뉴", selected: false },
    { name: "메뉴", selected: false },
    { name: "메뉴", selected: false },
    { name: "메뉴", selected: false },
    { name: "메뉴", selected: false },
    { name: "메뉴", selected: false },
  ],
};

function InfoWindowContainer() {
  const [init, setInit] = useState<boolean>(false);
  const [screenSizeState, setScreenSizeState] =
    useRecoilState(screenSizeStateAtom);
  const [tabState, setTabState] = useRecoilState<TabState>(tabStateAtom);

  const [infoProps, setInfoProps] = useState<any>(initInfoProps);

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
      setInit(true);
    };

    (async () => {
      const { innerHeight, innerWidth } = await screenSize();
      await tabState({ innerHeight, innerWidth });
      await init();
    })();
  }, []);

  if (!init) return <div></div>;
  else {
    return <InfoWindowTemplate infoProps={infoProps} />;
  }
}

export default InfoWindowContainer;
