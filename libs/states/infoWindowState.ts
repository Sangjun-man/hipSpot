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
        instagram: string,
    },
    imageList: ImageCompProps[],
    menuInfoList : MenuInfo[],
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
        
          imageList: [],
          menuInfoList:[],
          imageTabList:[]
    }
})

