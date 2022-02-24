import React from "react";
import styled from "@emotion/styled";
import { IoIosArrowUp, IoMdReorder } from "react-icons/io";

interface ModalStateButton {
  opened: boolean;
}

const ModalStateButton = ({ opened }: ModalStateButton) => {
  return (
    <StyledModalStateButton>
      {opened ? <IoIosArrowUp /> : <IoMdReorder />}
    </StyledModalStateButton>
  );
};

export default ModalStateButton;

const StyledModalStateButton = styled.button`
  border-radius: 10px;
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30px;
  width: 30px;
  box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.5);
  border: 0px;
  &:hover {
    background-color: #c4c4c4;
  }
  &:active {
    background-color: #8a8a8a;
  }
`;
