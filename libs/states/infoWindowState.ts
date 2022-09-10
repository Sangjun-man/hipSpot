import { atom } from "recoil";
import { ImageCompProps } from "../../components/atoms/ImageComp";
import { MenuInfo } from "../../components/modules/InfoWindow/MenuTable/MenuTable";
import { TabState } from "../types/infowindow";


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
        infoList:[],
        instagram: string,
    },
    imageList: ImageCompProps[],
    menuInfoList : MenuInfo[],
    imageTabList: ImageTabList[]
}


export type popUpHeightsType = {
    top: number;
    middle: number;
    thumbnail: number;
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
