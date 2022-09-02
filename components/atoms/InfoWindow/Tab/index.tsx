import React from "react";
import * as S from "./style";

export interface TabCssProps {
  selected: boolean;
}
export interface TabProps extends TabCssProps {
  selected: boolean;
  name: string;
}

const Tab = ({ name, selected }: TabProps) => {
  return (
    <S.TabBackground selected={selected}>
      <S.Tab selected={selected}>{name}</S.Tab>
    </S.TabBackground>
  );
};

export default Tab;
