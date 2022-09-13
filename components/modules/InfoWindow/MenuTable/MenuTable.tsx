import styled from "@emotion/styled";
import React from "react";
import * as S from "./style";
import * as C from "../../../atoms/InfoWindow/index";
import { MenuInfo } from "../../../../libs/states/infoWindowState";

interface MenuTableProps {
  menuInfoList: MenuInfo[];
}

const MenuTable = ({ menuInfoList }: MenuTableProps) => {
  return (
    <S.MenuTableWrapper>
      <C.SubTitle> 메뉴 </C.SubTitle>
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
