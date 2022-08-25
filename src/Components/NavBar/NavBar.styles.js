import styled from "styled-components";
import { ReactComponent as burger } from "/home/khaled/Desktop/React/MovieApp/my-app/src/assets/burger.svg";
import { ReactComponent as head } from "/home/khaled/Desktop/React/MovieApp/my-app/src/assets/head.svg";
import { ReactComponent as search } from "/home/khaled/Desktop/React/MovieApp/my-app/src/assets/glyphicons-basic-28-search-blue-177462d06db81ff2a02aa022c1c0be5ba4200d7bd3f51091ed9298980e3a26a1.svg";
import { ReactComponent as bell } from "/home/khaled/Desktop/React/MovieApp/my-app/src/assets/bell.svg";
import { ReactComponent as phoneLogo } from "/home/khaled/Desktop/React/MovieApp/my-app/src/assets/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg";
export const Container = styled.nav`
  @media (min-width: 48rem) {
    background: #022541;
    width: 100%;
    height: 4rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: "Source Sans Pro", Arial, sans-serif;
    z-index: 10;
    transition-property: top;
    transition-duration: 0.2s;
    transition-timing-function: linear;
    transition-delay: 0s;
  }
`;

export const ContentContainer = styled.div`
  width: 100%;
  padding-left: 10rem;
  padding-right: 3.75rem;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LogoDiv = styled.div`
  height: 100%;
  width: 9.625rem;
  display: flex;
  align-items: center;
  margin-left: 2.5rem;
`;

export const WordsDiv = styled.div`
  height: 100%;
  width: 19.7125rem;
  font-family: "Source Sans Pro", Arial, sans-serif;
  display: flex;
  justify-content: space-evenly;
  font-size: 0.9em;
  color: #fff;
  align-items: center;
`;

export const LeftContainer = styled.div`
  display: none;
  @media (min-width: 48rem) {
    width: 30.3375rem;
    height: 100%;
    display: flex;
  }
`;

export const RightContainer = styled.div`
  display: none;
  @media (min-width: 48rem) {
    width: 458.5px;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-right: 7.5rem;
  }
`;

export const AddContainer = styled.div`
  height: 100%;
  width: 1.4rem;
  display: flex;
  align-items: center;
  margin-left: 2.5rem;
`;

export const BlueSquareContainer = styled.div`
  height: 100%;
  width: 1.4rem;
  display: flex;
  align-items: center;
  margin-left: 2.5rem;
`;

export const EnButton = styled.button`
  height: 1.625rem;
  width: 1.75rem;
  color: white;
  background-color: transparent;
  border: 1px solid white;
  border-radius: 5px;
  &:hover {
    background-color: white;
    cursor: pointer;
    color: black;
  }
`;

export const PhoneContainer = styled.div`
  background: #022541;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: .9375rem;
  box-sizing: border-box;
  align-items: center;
  @media (min-width: 48rem) {
    display: none;
  }
`;

export const Burger = styled(burger)`
  width: 1.25rem;
  fill: #fff;

  &:hover {
    cursor: pointer;
  }

  @media (min-width: 48rem) {
    display: none;
  }
`;

export const PhoneRightContainer = styled.div`
  width: 25%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  @media (min-width: 48rem) {
    display: none;
  }
`;

export const Head = styled(head)`
  width: 1.25rem;
  fill: #fff;
  @media (min-width: 48rem) {
    display: none;
  }

  margin: 10px;
`;

export const Search = styled(search)`
  width: 1.25rem;
  fill: #fff;
  @media (min-width: 48rem) {
    display: none;
  }
`;

export const Bell = styled(bell)`
  width: 1.25rem;
  fill: #fff;
  @media (min-width: 48rem) {
    display: none;
  }
`;

export const PhoneLogo = styled(phoneLogo)`
  height: 2.5rem;
  width: 3.4375rem;
  @media (min-width: 48rem) {
    display: none;
  }
`;

export const PhoneMenu = styled.div`
  background-color: #203853;
  height: 100%;
  margin-left: ${(props) => (props.isClicked ? 0 : "-150%")};
  padding-left: 1.5rem;
  position: fixed;
  transition: ease-in-out 0.5s;
  width: 90%;
  z-index: 999;
  @media (min-width: 48rem) {
    display: none;
  }
`;
