import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { TabCssProps } from ".";
import { GrayColor, PinkColor, Typo } from "../../../../libs/styles/colors";
import { FS_Body1 } from "../../../../libs/styles/fonts";


export const TabBackground = styled.div<TabCssProps>`
  background-color: ${props=> props.selected ? PinkColor.darkTint : ""};
  padding: 8px 12px;
  box-sizing: border-box;
  border: 1px solid ${GrayColor[1]};
  border-radius: 20px;
  display:inline-block;
`

export const Tab = styled.div<TabCssProps>`
  ${FS_Body1}
  ${props => props.selected ?
    `
    font-weight:500;
    color:white;`
    :
    `color:${Typo.gray};`}

`;

