import styled from "@emotion/styled";


export const ImageSlideWrapper = styled.div`
`

export const ImageListWrapper = styled.div`
display:flex;
overflow-x: scroll;
/* -ms-overflow-style: none;
scrollbar-width:none;*/
&::-webkit-scrollbar{
    background-color:#f0f0f0;
    height:6px;
    border-radius:4px;
} 
&::-webkit-scrollbar-thumb{
    background-color: #2f2f2f;
    height:6px;
    border-radius:4px;


}
& > div{
    flex-shrink:0;
}
& > div + div{
    margin-left: 4px;
}

`


export const IndexBar = styled.div``

