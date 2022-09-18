import styled from "@emotion/styled";
import { TitleCssProps } from ".";
import { Typo } from "../../../../libs/styles/colors";
import { FS_Title } from "../../../../libs/styles/fonts";

export const Title = styled.div<TitleCssProps>`
  ${FS_Title}  
  color: ${Typo.black};
`;