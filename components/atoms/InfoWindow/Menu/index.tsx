import React from "react";
import * as S from "./style";

export interface MenuCssProps {
  fontSize?: number | string;
}
export interface InfoWIndowInfoSubjectProps extends MenuCssProps {
  title: string;
}

const InfoWIndowInfoSubject = ({
  fontSize = 0.875,
  title,
}: InfoWIndowInfoSubjectProps) => {
  return <S.Menu fontSize={fontSize}>{title}</S.Menu>;
};

export default InfoWIndowInfoSubject;
