import { ThemeProvider } from "@emotion/react";
import styled from "@emotion/styled";
import React from "react";
import { buttonTheme, buttonType } from "../../../libs/styles/theme";

export interface ButtonProps {
  children: React.ReactNode;
  theme?: buttonType;
  onClick?: (e?: React.MouseEvent<HTMLButtonElement>) => void;
  color?: string;
  fontColor?: string;
}

const Button = ({
  children,
  onClick,
  theme = "primary",
  color,
  fontColor,
}: ButtonProps) => {
  return (
    <ThemeProvider theme={buttonTheme[theme]}>
      <StyledButton onClick={onClick} color={color} fontColor={fontColor}>
        {children}
      </StyledButton>
    </ThemeProvider>
  );
};

export default Button;

const StyledButton = styled.button<ButtonProps>`
  background-color: ${(props) => props.theme.backgroundColor};
  ${(props) => props.color && `background-color:${props.color};`}
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  font-weight: 800;
  font-size: 0.875rem;
  color: #ffffff;
  ${(props) => props.fontColor && `color : ${props.fontColor};`}
  padding: 0.5rem 0.875rem;
  border: 0px;
  display: flex;
  align-items: center;
  & > svg {
    margin-left: 0.25rem;
  }
`;
