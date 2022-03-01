import styled from "@emotion/styled";
import React from "react";

export interface CardWrapperProps {
  children: React.ReactNode;
}

const CardWrapper = ({ children }: CardWrapperProps) => {
  return <StyledCardWrapper>{children}</StyledCardWrapper>;
};

export default CardWrapper;
const StyledCardWrapper = styled.div`
  width: 340px;
  height: 120px;
  border-radius: 20px;
  display: flex;
  justify-content: space-between;
  box-shadow: 0px 4px 3px 0px rgba(0, 0, 0, 0.2);
  overflow: hidden;
`;
