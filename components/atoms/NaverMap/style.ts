import { css } from '@emotion/react';
import styled from '@emotion/styled';


interface MapWrapper{
    mobile?: Boolean;
}


export const MapWrapper = styled.div<MapWrapper>`
  width: 100%;
  height: 400px;
  background-color: #c0c0c0;
  ${props => props.mobile && `
    @media screen and (max-width:786px){
        background-color: blue;
        height: 100vh;
        width: 100vw;
    }`
   }
`