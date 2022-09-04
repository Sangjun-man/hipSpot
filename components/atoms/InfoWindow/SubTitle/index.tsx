import styled from "@emotion/styled";
import { ReactChildren, ReactNode } from "react";
import * as S from "./style";

export interface SubTitleCssProps {
  fontSize?: number | string;
  color?: string;
}
export interface SubTitleProps extends SubTitleCssProps {
  children: ReactChildren | ReactNode;
}

const SubTitle = ({ children }: SubTitleProps) => {
  return <S.SubTitle>{children}</S.SubTitle>;
};

export default SubTitle;
