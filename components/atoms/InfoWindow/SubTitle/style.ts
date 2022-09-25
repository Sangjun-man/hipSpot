import styled from "@emotion/styled";
import { SubTitleCssProps } from ".";
import { Typo } from "../../../../libs/styles/colors";
import { FS_Title2 } from "../../../../libs/styles/fonts";

export const SubTitle = styled.div<SubTitleCssProps>`
  ${FS_Title2}
  color :${Typo.lightBlack};
`;