import Image from "next/image";
import React, {
  MouseEventHandler,
  TouchEventHandler,
  useEffect,
  useMemo,
  useState,
} from "react";
import { useRecoilValue } from "recoil";
import {
  imageRenderStateAtom,
  tabStateAtom,
} from "../../../libs/states/infoWindowState";
import { ImageCompProps } from "../../atoms/ImageComp";
import * as S from "./style";

export interface ImageSlideProps {
  imageList: Array<ImageCompProps>;
  // popUpstate: PopUpWindowState;
}

function ImageSlide({ imageList }: ImageSlideProps) {
  // console.log("imageList 전달값 : ", imageList);
  const imageSize = { base: 240, full: 400 };
  const [size, setSize] = useState<number>(imageSize.base);
  const tabState = useRecoilValue(tabStateAtom);
  const imageRenderState = useRecoilValue(imageRenderStateAtom);

  function slideEventListener(e: any) {
    const y = e.clientY;
    const calcRatio = 1 - y / window.innerHeight;

    const slideWrapperElem = document.getElementById("slide")!;
    slideWrapperElem.removeEventListener("forSlide", slideEventListener);

    if (calcRatio < 0.5) {
      setSize(imageSize.base);
    } else if (calcRatio >= 0.5 && calcRatio < 1) {
      const calcHeight =
        imageSize.base +
        (imageSize.full - imageSize.base) * (calcRatio - 0.5) * 2;
      setSize(calcHeight);
    } else {
      setSize(imageSize.full);
    }
    slideWrapperElem.addEventListener("forSlide", slideEventListener);
  }
  useEffect(() => {
    const slideWrapperElem = document.getElementById("slide")!;
    slideWrapperElem.addEventListener("forSlide", slideEventListener);
    if (tabState.popUpState === "thumbNail") {
      setSize(imageSize.base);
      slideWrapperElem.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }
  }, [tabState]);

  useEffect(() => {
    const slideWrapperElem = document.getElementById("slide")!;
    slideWrapperElem.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [imageRenderState]);

  return (
    <S.ImageSlideWrapper>
      <S.ImageListWrapper id="slide">
        {imageList.map(({ src, alt }, i) => (
          <S.ImageWrapper size={size} key={i}>
            {<Image src={src} alt={alt} layout="fill" />}
          </S.ImageWrapper>
        ))}
      </S.ImageListWrapper>
    </S.ImageSlideWrapper>
  );
}

export default ImageSlide;
