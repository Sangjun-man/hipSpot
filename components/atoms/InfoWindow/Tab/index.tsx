import React, { MouseEventHandler } from "react";
import * as S from "./style";

export interface TabCssProps {
  selected: boolean;
}
export interface TabProps extends TabCssProps {
  selected: boolean;
  name: string;
  type: string;
  onChangeImageTab: (type: string) => void;
}
const Tab = ({ name, selected, type, onChangeImageTab }: TabProps) => {
  return (
    <S.TabBackground
      selected={selected}
      onClick={(e) => {
        onChangeImageTab(type);
      }}
    >
      <S.Tab selected={selected}>{name}</S.Tab>
    </S.TabBackground>
  );
};

export default Tab;
