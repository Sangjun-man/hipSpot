export interface MarkerProps {
  src: StaticImageData | HTMLImageElement | string;
  alt: string;
  borderColor: string;
  width?: number;
  height?: number;
  pinStyle?: boolean;
}

export const markerString = ({
  src,
  alt,
  borderColor = "#000000",
  width = 60,
  height = 60,
}: MarkerProps) => `
<div style="
  box-sizing: border-box;
  background-size : cover;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));">
  <svg width="${width}"viewBox="0 0 60 68" fill="none"  style="position:absolute"xmlns="http://www.w3.org/2000/svg">
  <path d="M37.8875 60.9271L30 67.5L22.6341 61.0006C21.9033 60.3558 20.9622 60 19.9876 60H4C1.79086 60 0 58.2091 0 56V4C0 1.79086 1.79086 0 4 0H56C58.2091 0 60 1.79086 60 4V56C60 58.2091 58.2091 60 56 60H40.4482C39.5125 60 38.6063 60.3281 37.8875 60.9271Z" fill="${borderColor}"/>
  </svg>
  <div
    style="
    position:absolute;
    top:1px;
    left: 1px;
    clip-path: path('M55 58H38.7862C38.0843 58 37.4047 58.246 36.8656 58.6953L33.35 61.625L29 65.25L21.6339 58.7505C21.0858 58.2669 20.38 58 19.649 58H3C1.34315 58 0 56.6569 0 55V3C0 1.34315 1.34315 0 3 0H55C56.6569 0 58 1.34315 58 3V55C58 56.6569 56.6569 58 55 58Z');
    "
    >
      <div style="
      width:80px;
      height:80px;
      background : url(${src});
      background-size : cover;"
      >
      </div>
    </div>
</div>
`;

export const PointMarker = ({
  src,
  alt,
  borderColor = "#000000",
  width = 60,
  height = 60,
}: MarkerProps) => {
  const __html = markerString({ src, alt, borderColor, width, height });

  return <div dangerouslySetInnerHTML={{ __html: __html }}></div>;
};
