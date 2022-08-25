import styled from "styled-components";

export const FooterContainer = styled.div`
  background-color: #03233e;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: space-between;
  padding: 5rem;

  @media (min-width: 48rem) {
    flex-direction: row;
  }
`;

export const LogoContainer = styled.div`
  text-align: right;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  position: relative;
  top: -2.25rem;
  right: 0;
  margin-right: 1.25rem;
`;

export const TextContainer = styled.div`
  position: absolute;
  right:1.875rem;
  color: #00b4e4;
  border-color: #fff;
  background-color: #fff;
  font-size: 1.3em;
  font-weight: bold;
  border: .125rem solid #fff;
  border-radius: .3125rem;
  padding: .5rem 1rem;
  text-align: left;
  white-space: nowrap;
  box-sizing: border-box;
  @media (min-width: 48rem) {
    bottom: -3.125rem;
    right: 0rem;
  }
`;

export const Logo = styled.img.attrs((props) => ({ src: props.img }))`
  display: none;
  @media (min-width: 48rem) {
    width: 8.125rem;
    height: 5.875rem;
    display: block;
    margin: .625rem;
    margin-bottom: 3.125rem;
  }
`;

export const ItemsContainer = styled.div`
  margin-right: 2.5rem;
  height: auto;
  align-self: baseline;
  margin-top:1.25rem;
  margin-bottom: 1.25rem;
`;

export const MainItem = styled.div`
  color: #fff;
  font-weight: 600;
  font-size: 1.4em;
  margin-bottom: .625rem;
  white-space: nowrap;
`;

export const SecondaryItem = styled.div`
  color: #fff;
  font-size: 1.2em;
  margin-bottom: .3125rem;
  white-space: nowrap;
`;

export const JoinDiv = styled.div`
  height: 2.8125rem;
  width: 11.25rem;
  position: absolute;
  top: 8.75rem;
  border: .125rem solid #fff;
`;
