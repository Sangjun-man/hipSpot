import { css } from '@emotion/react';
import styled from "@emotion/styled";


interface cardImage {
    src: string;
}

export const placeInfo = styled.button`
position: fixed;
width: 100%;
border-radius: 1.5rem;
border: 2px solid #00000020;
display: flex;
height: 100%;
min-height: 300px;
max-height: 100px;
padding: 0;
margin: 0;
`;


export const cardImage = styled.div<cardImage>`
        position: relative;
        top: 0;
        left: 0;
        background-image: url(${props=>props.src});
        background-size: cover;
        background-repeat: no-repeat;
        height: 100%;
        width: 100%;
        max-height: 300px;
        max-width: 300px;
`

  export const title = styled.div`
    font-size: 1.125rem; 
    color: ${({ theme } ) => theme.font.card_title};
  `;
  
  export const description = styled("div")`
    font-size:1rem;
  `;
  