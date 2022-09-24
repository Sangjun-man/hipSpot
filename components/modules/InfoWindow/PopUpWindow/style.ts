import styled from '@emotion/styled';
import { GrayColor } from '../../../../libs/styles/colors';
import { TabState } from '../../../../libs/types/infowindow';

export const Layout = styled.div<{tabState:TabState}>`
    position:fixed;
    min-width:300px;
    max-width:600px;
    height:${(props) =>props.tabState.popUpState ==='full' && `calc(100% + 30px)`};
    box-sizing: border-box;
    transform : translateX(calc(50vw - 50%));
    top: calc(100% - 30px);
    width:100%;
    z-index:11;
`


export const Wrapper = styled.div`
    position:relative;
    background-color: white;
    width:100%;
    height: 100%;
    padding: 40px 20px 120px 20px;
    box-sizing: border-box;
    border-radius: 4px 4px 0px 0px;
    border :1px solid ${GrayColor[2]};
    overflow: scroll;
    -webkit-user-select:none;
    -moz-user-select:none;
    -ms-user-select:none;
    user-select:none;
`


export const ResizeSide = styled.div<{ tabState: TabState }>`
    position:absolute;
    top:0;
    width:100%;
    height:${props => props.tabState.popUpState === 'half' ? 500 : 60 }px;
    transform:translateY(-50%);
    transform:${props => props.tabState.popUpState  === 'half' && `translateY(-30px)`};
    background-color:transparent;
    &:hover{
        cursor:row-resize;
    }
`

export const ResizeSideStyle = styled.div`
    position:absolute;
    top:0px;
    height:30px;
    width:100%;
    display: flex;
    align-items: center;
    justify-content:center;
    border:1px solid ${GrayColor[1]};
    border-radius:4px;
    background-color:white;
`