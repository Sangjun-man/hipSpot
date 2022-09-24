import styled from "@emotion/styled";
import { FS_Title } from "../../../libs/styles/fonts";

export const ResizeHandler = styled.div`
  width:100%;
  height : 20px;
  display:flex;
  align-items: center;
  justify-content:center;
`

export const TopBarWrapper = styled.div`
  width:100%;
  display:flex;
  justify-content:space-between;
  position:relative;
  &> div {
  z-index:1;
  }
  `
export const PlaceName = styled.div`
  ${FS_Title}
  `
export const CloseIconWrapper = styled.div`
  &>svg{
    width:20px;
    height:20px;}
   `

export const ImageListWrapper = styled.div`
  margin-top:10px;
  & > div+ div {
    margin-top:8px;
  }
`
export const InfoWrapper = styled.div`
  margin-top:14px;
  & > div{
    margin-top:16px;
  }
`
export const BottomWrapper = styled.div`
margin-top:24px;

`