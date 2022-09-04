import styled from "@emotion/styled";

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
`
export const TabWrapper = styled.div`
    & > div{
        flex-shrink:0;
        white-space:nowrap;
    }
`