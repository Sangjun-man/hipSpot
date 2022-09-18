import styled from "@emotion/styled";
import { MenuCssProps } from ".";
import { Typo } from "../../../../libs/styles/colors";
import { FS_Caption } from "../../../../libs/styles/fonts";

export const Menu = styled.div<MenuCssProps>`
    ${FS_Caption}
    color:${Typo.body}
`;
