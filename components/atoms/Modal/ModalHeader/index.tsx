import styled from "@emotion/styled";
import React from "react";

interface ModalHeaderProps {
  children: React.ReactNode;
}

const ModalHeader = ({ children }: ModalHeaderProps) => {
  return <StyledModalHeader>{children}</StyledModalHeader>;
};

const StyledModalHeader = styled.div`
  position: relative;
  z-index: 2;
  width: 100%;
  min-height: 80px;
  box-shadow: 0px 4px 3px 0px rgba(0, 0, 0, 0.2);
`;

export default ModalHeader;
