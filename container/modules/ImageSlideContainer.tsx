import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import ImageSlide from "../../components/modules/ImageSlide/ImageSlide";
import ImageTabList from "../../components/modules/InfoWindow/ImageTabList/ImageTabList";
import {
  imageListStateAtom,
  imageTabListStateAtom,
  imageRenderStateAtom,
  ImageDataType,
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
  const [imageListState, setImageListState] =
    useRecoilState(imageListStateAtom);
  const [imageRenderState, setImageRenderState] =
    useRecoilState(imageRenderStateAtom);

  // const infoProps = useRecoilValue(infoPropsStateAtom);
  const onChangeImageTab: (type: string) => void = (type: string) => {
    // console.log("탭 바꾸기", imageTabListState, type);
    const newImageListState = [...imageTabListState].map((tabList) => ({
      ...tabList,
      selected: tabList.type === type ? true : false,
    }));
    // console.log(newImageListState);
    setImageTabListState(newImageListState);
    setImageRenderState(!imageRenderState);
  };

  useEffect(() => {
    // console.log("imageSlideRender");
    const getimageDataJson = async (instaId: string) => {
      const json = (await import(`public/imageData/${instaId}.json`)).default;
      return json.data;
    };
    const setData = async (imageData: ImageDataType) => {
      // console.log(
      //   "setData, imageTabListState, imageListState",
      //   imageTabListState,
      //   imageListState
      // );
      const selectedType = imageTabListState.find(
        ({ selected }) => selected
      )?.type;

      const parseImageTabListState = imageData.map(({ name, type }) => ({
        name,
        type,
        selected: selectedType === type ? true : false,
      }));

      const parseImageListState = imageData.find(
        ({ type }) => type === selectedType
      )!.imageList;

      // console.log("parse??: ", parseImageTabListState, parseImageListState);

      setImageTabListState(parseImageTabListState);
      setImageListState(parseImageListState);
    };

    (async () => {
      const imageData = await getimageDataJson(instaId);

      await (async () => {
        setData(imageData);
        setInit(true);
      })();
    })();
  }, [instaId, imageRenderState]);

  if (!init) return <div></div>;

  return (
    <>
      {tabState.popUpState === "full" && (
        <ImageTabList
          imageTabList={imageTabListState}
          onChangeImageTab={onChangeImageTab}
        />
      )}
      <ImageSlide imageList={imageListState}></ImageSlide>;
    </>
  );
}

export default ImageSlideContainer;
