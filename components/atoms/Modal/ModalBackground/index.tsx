import styled from "@emotion/styled";
import React from "react";

export interface ModalBackgroundProps {
  children: React.ReactNode;
}

const ModalBackground = styled.div<ModalBackgroundProps>`
  position: relative;
  top: 0;
  left: 0;
  z-index: 1;
  height: 100vh;
  width: 100vw;
  background-color: rgba(196, 196, 196, 0.4);
`;

export default ModalBackground;
