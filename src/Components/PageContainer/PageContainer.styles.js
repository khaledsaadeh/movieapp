import styled from "styled-components";

export const MainContainer = styled.div`
  margin-top: 100px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  box-sizing: border-box;
  flex-direction: column;
  padding:.875rem;
  @media (min-width: 48rem) {
    padding:0;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    box-sizing: border-box;
  }
`;
