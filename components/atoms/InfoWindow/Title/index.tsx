import styled from "@emotion/styled";
import * as S from "./style";

export interface TitleCssProps {
  color?: string;
}
export interface TitleProps extends TitleCssProps {
  name: string;
}

const Title = ({ name }: TitleProps) => {
  return <S.Title>{name}</S.Title>;
};

export default Title;
