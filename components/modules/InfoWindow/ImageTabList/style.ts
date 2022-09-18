import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import { PopUpWindowState } from "../../../../libs/types/infowindow";
const fadein = keyframes`
 0%{
    opacity:0;
 }
 100%{
    opacity:1;
 }
`


export const ImageTabListWrapper = styled.div`
    display:flex;
    align-items:center;
    width:100%;
    & > div + div{
        margin-left:4px;
    }
    overflow-y: scroll;
    &::-webkit-scrollbar{
        display:none;
    }
    scrollbar-width:none;
    --ms-overflow-style:none;
    animation:${fadein} 0.2s linear;
`
export const TabWrapper = styled.div`
    & > div{
        flex-shrink:0;
        white-space:nowrap;
    }
`

