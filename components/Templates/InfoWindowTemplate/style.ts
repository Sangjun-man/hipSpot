import styled from "@emotion/styled";

export const InfoWindowLayout = styled.div`
  position: fixed;
  top:0;
  left:50%;
  transform: translate(-50%);
  margin:auto;
  z-index:1;
  height:100%;
  width:1000px;
  max-width: 1200px;
  margin: auto;
  background-color: transparent;
  @media (max-width: 1200px) and (min-width: 729px) {
    max-width:640px;
  }
  @media (max-width: 728px) {
    width:100%;
  }
`;

export const InfoWindowWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  margin: auto;
  background-color: #ffffff;
  text-align: left;
  overflow: hidden;
  & > div {
    margin-top: 1rem;
    padding: 0 1rem;
  }
  & > button {
    margin: auto;
  }
`;



export const GiveBackgroudColor = styled.div`
  background-color: rgba(255, 234, 240, 0.12);
`;
