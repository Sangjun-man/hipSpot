import styled from '@emotion/styled';
import { PopUpWindowState } from '../../../../container/Templates/InfoWindowTemplateContainer';
import { GrayColor } from '../../../../libs/styles/colors';

export const Layout = styled.div<{ popUpState: PopUpWindowState}>`
    position:fixed;
    min-width:300px;
    max-width:600px;
    height:100vh;
    border :1px solid ${GrayColor[2]};
    box-sizing: border-box;
    border-radius: 4px;
    transform : translateX(calc(50vw - 50%));
    /* transition: 0.4s ease-in-out; */
    top: calc(100vh - 100px);
    width:100%;
`


export const Wrapper = styled.div`
    position:relative;
    background-color: white;
    width:100%;
    height: 100%;
    padding:20px 20px;
    box-sizing: border-box;
    overflow: scroll;
`


export const ResizeSide = styled.div`
    position:absolute;
    top:0;
    width:100%;
    height: 50px;
    transform:translateY(-50%);
    &:hover{
        cursor:row-resize;
    }
`