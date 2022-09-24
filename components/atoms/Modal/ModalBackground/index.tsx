import styled from "@emotion/styled";
import React from "react";

export interface ModalBackgroundProps {
  children: React.ReactNode;
  isFilterListOpen: boolean;
}

const ModalBackground = styled.div<ModalBackgroundProps>`
  position: fixed;
  z-index: 1;
  height: var(--vh, 1vh);
  width: 100vw;
  background-color: rgba(196, 196, 196, 1);
  transition: 0.5s all ease;
  ${(props) =>
    props.isFilterListOpen ? "top:0; left:0;" : "top:0; left:calc(-100vw)"}
`;

export default ModalBackground;
