import React from "react";
import * as S from "./style";

export interface MenuCssProps {
  fontSize?: number | string;
}
export interface MenuProps extends MenuCssProps {
  menu: string;
}

const Menu = ({ fontSize = 0.875, menu }: MenuProps) => {
  return <S.Menu fontSize={fontSize}>{menu}</S.Menu>;
};

export default Menu;
