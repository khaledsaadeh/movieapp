import styled from "styled-components";

export const SearchButton = styled.button`
  background-color: ${(props) => (props.blueButton ? "#00B4E4" : "#ECECEC")};
  font-size: 1em;
  line-height: 1;
  font-weight: 600;
  width: 100%;
  border-radius: 2.5rem;
  margin-top: 1.25rem;
  border:0;
`;

export const SearchText = styled.h2`
  font-size: 1.3em;
  margin: .625rem;
  color: ${(props) => (props.blueButton ? "#fff" : "#767676")};
  font-family: "Source Sans Pro", Arial, sans-serif;
`;
