import styled from "@emotion/styled";

export const MenuTableWrapper = styled.div`
    width: 100%;
    min-width:300px;
    box-sizing: border-box;
  border-left: 4px solid rgba(5, 5, 5, 0.7);
  padding: 4px 18px 0px 12px;
  & > div {
    padding: 0 0 0.5rem 0;
    & + div {
      padding-top: 0;
    }
  }
`;

export const MenuWrapper = styled.div`
    display:flex;
    justify-content: space-between;
    align-items: center;
`