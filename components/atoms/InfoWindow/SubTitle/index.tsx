import styled from "@emotion/styled";
import * as S from "./style";

export interface SubTitleCssProps {
  fontSize?: number | string;
  color?: string;
}
export interface SubTitleProps extends SubTitleCssProps {
  name: string;
}

const SubTitle = ({ name }: SubTitleProps) => {
  return <S.SubTitle>{name}</S.SubTitle>;
};

export default SubTitle;
