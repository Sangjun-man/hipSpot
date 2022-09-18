import { css } from "@emotion/react";

export interface MarkerProps {
  src?: StaticImageData | HTMLImageElement | string;
  instaId: string;
  alt?: string;
  borderColor: string;
  scale?: number;
  width?: number;
  height?: number;
  placeName: string;
}

export const PointMarkerString = ({
  instaId,
  alt,
  borderColor = "#000000",
  width = 60,
  height = 60,
  scale = 1,
  placeName = "",
}: MarkerProps) => {
  const src = instaId ? `/images/${instaId}/0.jpg` : "/images/@4fbhouse/0.jpg";
  const componentCss = {
    wrapperStyle: css`
      box-sizing: border-box;
      background-size: cover;
      width: 60px;
      height: 68px;
      display: flex;
      flex-direction: column;
      align-items: center;
    `.styles,

    markerWrapperStyle: css`
      filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
      width: 100%;
    `.styles,
    maskImgWrapperStyle: css`
      position: absolute;
      top: 1px;
      left: 1px;
      width: 60px;
      height: 68px;
      overflow: hidden;
    `.styles,

    maskImgStyle: css`
      width: 80px;
      height: 80px;
      background: url(${src});
      background-size: cover;
      background-position: center;
      transform: translate(-10px, -10px);
    `.styles,

    placeNameStyle: css`
      position: absolute;
      text-align: center;
      transform: translate(0, -100%);
      white-space: nowrap;
      color: #000000;
      font-weight: 500;
      text-shadow: 0 0.5px white, 0.5px 0px white, -0.5px 0px white,
        0px -0.5px white, 1px 1px 1px ${borderColor}77;
    `.styles,
  };

  const {
    wrapperStyle,
    markerWrapperStyle,
    maskImgStyle,
    maskImgWrapperStyle,
    placeNameStyle,
  } = componentCss;
  return `

  <div class="mapgl-marker-animation" style="${wrapperStyle}">
    <div style="${placeNameStyle}">${placeName}</div>
    <div style="${markerWrapperStyle}">
      <svg width="${width}"viewBox="0 0 60 68" fill="none"  style="position:absolute"xmlns="http://www.w3.org/2000/svg">
  
        <path d="M37.8875 60.9271L30 67.5L22.6341 61.0006C21.9033 60.3558 20.9622 60 19.9876 60H4C1.79086 60 0 58.2091 0 56V4C0 1.79086 1.79086 0 4 0H56C58.2091 0 60 1.79086 60 4V56C60 58.2091 58.2091 60 56 60H40.4482C39.5125 60 38.6063 60.3281 37.8875 60.9271Z" fill="${borderColor}"/>
      </svg>
      <div style="${maskImgWrapperStyle} clip-path: path('M55 58H38.7862C38.0843 58 37.4047 58.246 36.8656 58.6953L33.35 61.625L29 65.25L21.6339 58.7505C21.0858 58.2669 20.38 58 19.649 58H3C1.34315 58 0 56.6569 0 55V3C0 1.34315 1.34315 0 3 0H55C56.6569 0 58 1.34315 58 3V55C58 56.6569 56.6569 58 55 58Z'); ">
        <div style="${maskImgStyle}" ></div>
      </div>
    </div>
  </div>
`;
};

export const PointMarker = ({
  src,
  alt,
  borderColor = "#000000",
  width = 60,
  height = 60,
}: MarkerProps) => {
  const __html = PointMarkerString({ src, alt, borderColor, width, height });

  return <div dangerouslySetInnerHTML={{ __html: __html }}></div>;
};
