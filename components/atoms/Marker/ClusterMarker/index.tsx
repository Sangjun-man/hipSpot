import { css } from "@emotion/react";
import styles from "./cluster.module.css";

export const RoundedMarker = (feature, index: number) => {
  const { borderColor = "", id, instaId } = feature.properties;
  const src = `/images/${instaId}/0.jpg`;
  const [width, height] = [60, 60];

  const classList = ["mapgl-marker-cluster", `cluster-${index + 1}`].join(" ");

  const { styles: RoundedMarkerStyle } = css`
    border: 1.5px solid ${borderColor};
    width: ${width}px;
    height: ${height}px;
    border-radius: 60px;
    box-sizing: border-box;
    background: url(${src});
    background-size: cover;
    transition: 0.2s ease;
    position: absolute;
  `;

  return ` 
    <div class="${classList}" style="${RoundedMarkerStyle};"></div>
    `;
};

export const PointCountBadge = (pointCount: number) => {
  const classList = [styles.test].join(" ");
  const { styles: PointCountBadgeStyle } = css`
    border-radius: 20px;
    background-color: red;
    width: 12px;
    height: 12px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 8px;
    position: absolute;
    left: 48px;
    z-index: 2;
  `;

  return `<div class="${classList}"style="${PointCountBadgeStyle}"> ${pointCount}</div>`;
};

export const ClusterMarkerSeal = (pointCount: number, featureLength) => {
  const classList = ["cluster-0"].join(" ");

  const { styles: ClusterMarkerSealStyle } = css`
    width: 60px;
    height: 60px;
    position: absolute;
    border-radius: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: pink;
  `;

  const moreCounts = pointCount - featureLength;

  return `<div class="${classList} "style="${ClusterMarkerSealStyle}">${
    moreCounts ? `${moreCounts}개 더보기` : "HipSpot"
  }</div>`;
};

export const ClusterMarkerString = (aFeatures) => {
  // console.log(aFeatures);
  const leavesMarker = aFeatures
    .map((feature, i) => RoundedMarker(feature, i))
    .join("");

  return `${leavesMarker}`;
};
