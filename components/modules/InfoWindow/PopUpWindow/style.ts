import styled from '@emotion/styled';
import { PopUpWindowState } from '../../../../container/modules/PopUpWindowContainer';
import { GrayColor } from '../../../../libs/styles/colors';

export const Layout = styled.div<{ popUpState: PopUpWindowState}>`
    position:fixed;
    width:50%;
    min-width:300px;
    max-width:1200px;
    height:100vw;
    border :1px solid ${GrayColor[2]};
    box-sizing: border-box;
    border-radius: 4px;
    /* transition: 0.4s ease-in-out; */
    top: calc(100vh - 20px);
`


export const Wrapper = styled.div`
    position:relative;
    width:100%;
    height: 100%;
`


export const ResizeSide = styled.div`
    position:absolute;
    top:0;
    width:100%;
    height: 20px;
    transform:translateY(-50%)
`