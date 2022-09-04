import styled from "@emotion/styled";
import { ReactChildren, ReactNode } from "react";
import * as S from "./style";

export interface TitleCssProps {
  color?: string;
}
export interface TitleProps extends TitleCssProps {
  children: ReactChildren | ReactNode;
}

const Title = ({ children }: TitleProps) => {
  return <S.Title>{children}</S.Title>;
};

export default Title;
