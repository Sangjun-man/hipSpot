import React, { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import ImageSlide from "../../components/modules/ImageSlide/ImageSlide";
import ImageTabList from "../../components/modules/InfoWindow/ImageTabList/ImageTabList";
import {
  imageListStateAtom,
  imageTabListStateAtom,
  infoPropsStateAtom,
  tabStateAtom,
} from "../../libs/states/infoWindowState";
import { TabState } from "../../libs/types/infowindow";

interface ImageSlideContainerProps {
  instaId: string;
  tabState: TabState;
}

function ImageSlideContainer({ instaId, tabState }: ImageSlideContainerProps) {
  const [init, setInit] = useState(false);
  const [imageTabListState, setImageTabListState] = useRecoilState(
    imageTabListStateAtom
  );
  const infoProps = useRecoilValue(infoPropsStateAtom);
  const [imageListState, setImageListState] =
    useRecoilState(imageListStateAtom);

  useEffect(() => {
    const getimageDataJson = async (instaId: string) => {
      const json = (await import(`public/imageData/${instaId}.json`)).default;
      return json.data;
    };
    const setData = async (imageData) => {
      const selectedType = imageTabListState.find(
        ({ selected }) => selected
      )?.type;

      const parseImageTabListState = imageData.map(({ name, type }) => ({
        name,
        type,
        selected: type === "storeImage" ? true : false,
      }));

      const parseImageListState = imageData.find(
        ({ type }) => type === selectedType
      ).imageList;

      setImageTabListState(parseImageTabListState);
      setImageListState(parseImageListState);
    };

    (async () => {
      const imageData = await getimageDataJson(instaId);
      (async () => {
        setData(imageData);
        setInit(true);
      })();
    })();
  }, [infoProps]);
  if (!init) return <div></div>;

  return (
    <>
      {tabState.popUpState === "full" && (
        <ImageTabList imageTabList={imageTabListState} />
      )}
      <ImageSlide imageList={imageListState}></ImageSlide>;
    </>
  );
}

export default ImageSlideContainer;
