import styled from "@emotion/styled";

const InfoWindowLayout = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  max-width: 340px;
  margin: auto;
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

export default InfoWindowLayout;
