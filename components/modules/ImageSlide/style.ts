import styled from "@emotion/styled";


export const ImageSlideWrapper = styled.div`
    position: relative;
    z-index:1;
`

export const ImageListWrapper = styled.div`
display:flex;
width:100%;
height: 100%;
overflow-x: scroll;
overflow-y:hidden;
& + & {
    margin-right:4px;
}
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
`


export const ImageWrapper = styled.div<{size:number}>`
    width:${props => props.size}px;
    height:${props => props.size}px;
    position:relative;

    & + & {
        margin-left:3px;
    }
`
