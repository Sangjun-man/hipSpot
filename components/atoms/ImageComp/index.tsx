import styled from "@emotion/styled";
import Image from "next/image";
import React from "react";

export interface ImageProps {
  src: StaticImageData | HTMLImageElement | string;
  alt: string;
  width?: number;
  height?: number;
}

const ImageComp = ({ src, alt, width = 120, height = 120 }: ImageProps) => {
  return (
    <ImageContainer>
      <Image src={src} alt={alt} width={width} height={height}></Image>
    </ImageContainer>
  );
};

export default ImageComp;
const ImageContainer = styled.div``;
