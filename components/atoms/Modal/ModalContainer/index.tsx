import styled from "@emotion/styled";
import React from "react";

export interface ModalContainerProps {
  children: React.ReactNode;
}

const ModalContainer = ({ children }: ModalContainerProps) => {
  return <StyledModalContainer>{children}</StyledModalContainer>;
};

const StyledModalContainer = styled.div`
  position: relative;
  z-index: 2;
  width: 100%;
  min-height: 80px;
`;

export default ModalContainer;
