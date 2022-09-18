import styled from "@emotion/styled";
import { SubTitleCssProps } from ".";
import { Typo } from "../../../../libs/styles/colors";
import { FS_SubTitle } from "../../../../libs/styles/fonts";

export const SubTitle = styled.div<SubTitleCssProps>`
  ${FS_SubTitle}
  color :${Typo.lightBlack};
`;