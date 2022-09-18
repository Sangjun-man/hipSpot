import styled from "@emotion/styled";

export const InfoWindowLayout = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  max-width: 1200px;
  margin: auto;
  background-color: transparent;
  @media (max-width: 1200px) and (min-width: 729px) {
    width: 1000px;
  }
  @media (max-width: 728px) {
    width: 300px;
  }
`;

export const InfoWindowWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  max-width: 340px;
  background-color: #ffffff;
  padding: 3rem 0rem;
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
