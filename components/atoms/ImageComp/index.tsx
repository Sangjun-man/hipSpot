import styled from "@emotion/styled";
import Image from "next/image";
import React from "react";
export interface ImageCompProps {
  src: StaticImageData | HTMLImageElement | string;
  alt?: string;
  width?: number;
  height?: number;
}

const ImageComp = ({ src, alt, width = 140, height = 140 }: ImageCompProps) => {
  return <Image src={src} alt={alt} layout="fill"></Image>;
};

export default ImageComp;
