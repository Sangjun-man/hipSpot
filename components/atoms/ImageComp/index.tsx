import styled from "@emotion/styled";
import Image from "next/image";
import React from "react";

interface ImageProps {
  src: StaticImageData | HTMLImageElement | string;
  alt: string;
}

const ImageComp = ({ src, alt }: ImageProps) => {
  return (
    <ImageContainer>
      <Image src={src} alt={alt} width={100} height={100}></Image>
    </ImageContainer>
  );
};

export default ImageComp;
const ImageContainer = styled.div``;
