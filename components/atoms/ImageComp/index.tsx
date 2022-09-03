import styled from "@emotion/styled";
import Image from "next/image";
import React from "react";
import { PopUpWindowState } from "../../../container/modules/PopUpWindowContainer";

export interface ImageCompProps {
  src: StaticImageData | HTMLImageElement | string;
  popUpstate: PopUpWindowState;
  alt?: string;
  width?: number;
  height?: number;
}

const ImageComp = ({
  src,
  alt,
  width = 140,
  height = 140,
  popUpstate,
}: ImageCompProps) => {
  const size =
    popUpstate === "thumbNail"
      ? 140
      : popUpstate === "half" || popUpstate === "full"
      ? "100%"
      : 0;
  console.log(popUpstate, size);

  return <Image src={src} alt={alt} width={size} height={size}></Image>;
};

export default ImageComp;
