import { atom } from "recoil";
import { ImageCompProps } from "../../components/atoms/ImageComp";
import { TabState } from "../types/infowindow";


export interface PlaceInfo {
    title: string;
    content: string;
  }

export type ScreenSizeStateType = {
    innerHeight: number;
    innerWidth: number;
}

export interface ImageTabList {
    name: string;
    selected: boolean;
  }

export type InfoPropsStateType = 
{
    contentsArgs: {
        placeName: string,
        infoList:PlaceInfo[],
        instaId: string,
    },
    // imageList: ImageCompProps[],
    menuInfoList : MenuInfo[],
    // imageTabList: ImageTabList[]
    }

export type ImageSlidePropsStateType = {
    imageList: ImageCompProps[],
    imageTabList: ImageTabList[]
    }


export interface MenuInfo {
    menu: string;
    price: number | string;
  }

export type popUpHeightsType = {
    top: number;
    middle: number;
    thumbnail?: number;
    bottom: number;
}

export const screenSizeStateAtom = atom({
    key: "atom / screenSizeState",
    default: {
        innerWidth: 0,
        innerHeight:0,
    }
})

export const tabStateAtom = atom<TabState>({ 
    key: "atom / tabState",
    default: {
        top: 10000,
        onHandling: false,
        popUpState: "thumbNail"
    }
})

export const infoPropsStateAtom = atom({
    key: "atom / infoPropsState",
    default: {
        contentsArgs: {
            placeName: "",
            infoList:[],
            instagram: "",
          },
        
          menuInfoList:[],
    }
})

const initImageList = [
    { src: "/image/testImg.png" },
    { src: "/image/testImg2.png" },
    { src: "/image/testImg3.png" },
    { src: "/image/testImg4.png" },
    { src: "/image/testImg.png" },
    { src: "/image/testImg3.png" },
    { src: "/image/testImg.png" },
    { src: "/image/testImg2.png" },
    { src: "/image/testImg3.png" },
  ];
  const initTabListState = [
    { name: "내부사진", type:'storeImage',selected: false },
    { name: "외부사진", type:'storeImage',selected: true },
    { name: "추가로",type:'storeImage', selected: false },
    { name: "여러 메뉴의",type:'storeImage', selected: false },
    { name: "사진 탭을", type:'storeImage',selected: false },
    { name: "만들수",type:'storeImage', selected: false },
    { name: "있고", type:'storeImage',selected: false },
    { name: "스크롤로",type:'storeImage', selected: false },
    { name: "넘길수있어요",type:'storeImage', selected: false },
    { name: "메뉴",type:'menuImage', selected: false },

  ];


export const imageTabListStateAtom = atom({
    key: "atom / imageTabListState",
    default: initTabListState
})

export const imageListStateAtom = atom({
    key: "atom / imageListState",
    default : initImageList
})