import styled from "@emotion/styled";
import React from "react";
import Image from "next/image";
import { MarkerProps } from "../PointMarker";

export const RoundedMarker = (leaf: MarkerProps, index: number) => {
  const { src, alt, borderColor, width = 60, height = 60 } = leaf;
  return ` 
    <div
    class="mapgl-marker-cluster cluster-${index}"
    style="border : 1.5px solid ${borderColor};
    width:${width}px;
    height:${height}px;
    border-radius: 4px;
    box-sizing: border-box;
    background : url(${src});
    background-size : cover;
    transition: 0.2s ease;
    z-index:${index}
    position:absolute;
    
    "
    >
    </div>
    `;
};

export const ClusterMarkerString = (features: MarkerProps[]) => {
  const leavesMarker = features
    .map((leaf, i) => RoundedMarker(leaf, i))
    .join("");
  // console.log(leavesMarker);

  return `<div style="postion:relative;"> ${leavesMarker}</div>`;
};

// const ClusterMarker = ({
//   src,
//   alt,
//   borderColor = "#706f6f",
//   width = 60,
//   height = 60,
// }: MarkerProps) => {
//   const htmlSting = `<div
//     style="border : 1.5px solid ${borderColor};
//     width:${width}px;
//     height:${height}px;
//     border-radius: 4px;
//     box-sizing: border-box;
//     background : url(${src});
//     background-size : cover;
//     filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
//     "
//   >
//   </div>
// `;

//   return <div dangerouslySetInnerHTML={{ __html: htmlSting }}></div>;
// };

// export default ClusterMarker;
