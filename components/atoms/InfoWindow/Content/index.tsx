import React from "react";
import * as S from "./style";

export interface AddressCssProps {
  fontSize?: number | string;
}
export interface AddressProps extends AddressCssProps {
  content: string;
}

const Content = ({ fontSize = 0.75, content }: AddressProps) => {
  return <S.Content fontSize={fontSize}>{content}</S.Content>;
};

export default Content;
