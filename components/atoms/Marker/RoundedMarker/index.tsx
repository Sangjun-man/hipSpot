import styled from "@emotion/styled";
import React from "react";
import Image from "next/image";

export interface MarkerProps {
  src: StaticImageData | HTMLImageElement | string;
  alt: string;
  borderColor: string;
  width?: number;
  height?: number;
  pinStyle?: boolean;
}

const RoundedMarker = ({
  src,
  alt,
  borderColor = "#706f6f",
  width = 60,
  height = 60,
}: MarkerProps) => {
  const htmlSting = `<div
    style="border : 1.5px solid ${borderColor};
    width:${width}px;
    height:${height}px;
    border-radius: 4px;
    box-sizing: border-box;
    background : url(${src});
    background-size : cover;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    "
  >
  </div>
`;

  return <div dangerouslySetInnerHTML={{ __html: htmlSting }}></div>;
};

export default RoundedMarker;
