import styled from "@emotion/styled";
import React from "react";
import * as S from "./style";
import * as C from "../../../atoms/InfoWindow/index";

export interface MenuInfo {
  menu: string;
  price: number | string;
}
interface MenuTableProps {
  menuInfoList: MenuInfo[];
}

const MenuTable = ({ menuInfoList }: MenuTableProps) => {
  return (
    <S.MenuTableWrapper>
      {menuInfoList.map((info: MenuInfo, i: number) => (
        <S.MenuWrapper key={i}>
          <C.Menu menu={`${info.menu}`} />
          <C.Menu menu={`${info.price}`} />
        </S.MenuWrapper>
      ))}
    </S.MenuTableWrapper>
  );
};

export default MenuTable;

const ButtonWrapper = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  transform: translateX(1.5rem);
`;
