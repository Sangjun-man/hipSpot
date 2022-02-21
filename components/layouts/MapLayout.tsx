import styled from "@emotion/styled";

export const MapLayout = styled("div")`
  position: fixed;
  max-width: 1200px;
  height: 100%;
  width: 100%;
  background-color: red;

  @media screen and (max-width: 768px) {
    width: 100vw;
    height: 100vh;
    background-color: blue;
  }
`;
