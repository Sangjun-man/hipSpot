import styled from "@emotion/styled";
import { AddressCssProps } from ".";
import { Typo } from "../../../../libs/styles/colors";
import { FS_Body1 } from "../../../../libs/styles/fonts";

export const Content = styled.div<AddressCssProps>`
    ${FS_Body1}
    color:${Typo.body}
`;
