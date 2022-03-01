import styled from "@emotion/styled";
import React from "react";

interface CardLayoutProps {
  children: React.ReactNode;
}

const CardLayout = ({ children }: CardLayoutProps) => {
  return <CardWrapper>{children}</CardWrapper>;
};

export default CardLayout;
const CardWrapper = styled.div`
  width: 340px;
  height: 120px;
  border-radius: 20px;
  display: flex;
  justify-content: space-between;
  box-shadow: 0px 4px 3px 0px rgba(0, 0, 0, 0.2);
  overflow: hidden;
`;
