import { ThemeProvider } from "@emotion/react";
import styled from "@emotion/styled";
import React from "react";
import { buttonTheme, buttonType } from "../../../commons/styles/theme";

interface ButtonProps {
  children: React.ReactNode;
  theme?: buttonType;
  onClick?: (e?: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button = ({ children, onClick, theme = "primary" }: ButtonProps) => {
  return (
    <ThemeProvider theme={buttonTheme[theme]}>
      <StyledButton onClick={onClick}>{children}</StyledButton>
    </ThemeProvider>
  );
};

export default Button;

const StyledButton = styled.button`
  background-color: ${(props) => props.theme.backgroundColor};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  font-weight: 800;
  font-size: 0.875rem;
  color: #ffffff;
  padding: 0.5rem 0.875rem;
  border: 0px;
`;
