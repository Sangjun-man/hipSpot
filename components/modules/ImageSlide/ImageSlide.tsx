import React from "react";
import ImageComp, { ImageCompProps } from "../../atoms/ImageComp";
import * as S from "./style";

export interface ImageSlideProps {
  imageList: Array<ImageCompProps>;
  size: number;
}

function ImageSlide({ imageList, size = 100 }: ImageSlideProps) {
  return (
    <S.ImageSlideWrapper>
      <S.ImageListWrapper>
        {imageList.map(({ src }, i) => (
          <ImageComp src={src} width={size} height={size} key={`${i}_${src}`} />
        ))}
      </S.ImageListWrapper>
    </S.ImageSlideWrapper>
  );
}

export default ImageSlide;

//   const imageListWidth = imageList.length * 60 + (imageList.length - 1) * 4;
//   const scrollData = {
//     scrollWidth: imageListWidth,
//     scrollAbleWidth: 0,
//     scrollLeft: 0,
//     scrollRatio: 0,
//   };
//     onScroll={(e) => {
//       scrollData.scrollLeft = e.target.scrollLeft;
//       scrollData.scrollAbleWidth =
//         scrollData.scrollWidth - e.target.offsetWidth;
//       scrollData.scrollRatio =
//         ((scrollData.scrollAbleWidth -
//           (scrollData.scrollAbleWidth - scrollData.scrollLeft)) /
//           scrollData.scrollAbleWidth) *
//         100;
//     }}
