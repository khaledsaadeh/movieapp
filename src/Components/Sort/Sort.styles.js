import styled from "styled-components";
import { ReactComponent as arrow } from "/home/khaled/Desktop/React/MovieApp/my-app/src/assets/arrow.svg";

export const SortContainer = styled.div`
  width: 100%;
  height: 3.3125rem;
  border: 0.0625rem solid #e3e3e3;
  border-radius: 0.3125rem 0.3125rem 0rem 0rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-content: center;
  box-shadow: 0 0.0625rem 0.0625rem rgba(0, 0, 0, 0.1);
  cursor: pointer;
  box-sizing: border-box;
`;

export const Container = styled.div`
  margin-top: -3.75rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (min-width: 48rem) {
    width: 16.25rem;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-top: -4.25rem;
    margin-bottom: 1.875rem;
  }
`;

export const SelectContainer = styled.div`
  width: 100%;
  margin-top: 0;
  height: auto;
  border-radius: 0.3125rem;
  border: 0.0625rem solid #e3e3e3;
  box-shadow: 0 0.125rem 0.5rem rgba(0, 0, 0, 0.1);
  font-family: "Source Sans Pro", Arial, sans-serif;
  font-size: 1em;
  border-radius: 0rem 0rem 0.3125rem 0.3125rem;
  padding: 0.875rem 1rem 1rem 1rem;
  box-sizing: border-box;
`;

export const Arrow = styled(arrow)`
  width: 1rem;
  transform: rotate(${(props) => (props.isClicked ? "90deg" : 0)});
  margin-right: 0.9375rem;
`;

export const SortTitle = styled.h3`
  margin-left: 0.9375rem;
  font-family: "Source Sans Pro", Arial, sans-serif;
  font-size: 1em;
`;

export const SelectText = styled.h3`
  font-size: 1em;
  font-weight: 300;
  color: rgba(0, 0, 0, 0.6);
  text-align: start;
`;
