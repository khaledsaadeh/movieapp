import styled from "styled-components";

export const MovieCard = styled.image`
  width: 100%;
  display: flex;
  flex-direction: row;
  border: 0.0625rem solid #e3e3e3;
  margin-top: 1.875rem;
  border: 0.0625rem solid #e3e3e3;
  border-radius: 0.5rem;
  box-shadow: 0 0.125rem 0.5rem #0000001a;
  box-sizing: border-box;

  @media (min-width: 48rem) {
    width: 11.375rem;
    border: .0625rem solid #e3e3e3;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    overflow: hidden;
    border-radius: .625rem;
    position: relative;
    margin: .9375rem;
    margin-bottom: 1.5625rem;
    margin-top: 0px;
  }
`;

export const ImageContainer = styled.img`
  width: 5.875rem;
  height: 100%;
  @media (min-width: 48rem) {
    width: 100%;
    height: 17.0625rem;
    display: block;
  }
`;

export const InfoContainer = styled.div`
  position: relative;
  padding: .875rem;
  flex-direction: row;
  width: 100%;
  word-wrap: normal;
  overflow-wrap: break-word;
  @media (min-width: 48rem) {
    padding: .3125rem;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    text-align:left;
    padding-top: .3125rem;
    box-sizing: border-box;
  }
`;

export const Summary = styled.p`
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  display: -webkit-box;
  font-size: 0.8em;
  line-height: 1.3125rem;
  margin: 0.625rem;
  max-height: 3rem;
  overflow: hidden;
  text-overflow: ellipsis;
  @media (min-width: 48rem) {
    display: none;
  }
`;

export const TitleContainer = styled.div`
  width: 100%;
  font-size: 1em;
  display: flex;
  @media (min-width: 48rem) {
    margin-top: 1.875rem;
    font-size: 1em;
    font-weight: 700;
    color: #000;
    &:hover {
      color: #00b4e4;
      cursor: pointer;
    }
  }
`;

export const DateContainer = styled.p`
  width: 100%;
  font-size: 1em;
  display: flex;
  color: rgba(0, 0, 0, 0.6);
  @media (min-width: 48rem) {
    margin-top: .3125rem;
    display: block;
    font-size: 1em;
    text-align:left;
  }
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: auto;
  flex-wrap: wrap;
  justify-content: space-between;
  @media (min-width: 48rem) {
    flex-basis: 60%;
    flex-direction: row;
    height: auto;
    margin-left: 3.75rem;
  }
`;

export const IconContainer = styled.div`
  @media (min-width: 48rem) {
    height: 1.6rem;
    width: 1.6rem;
    position: absolute;
    top: 0;
    right: 0;
    display: flex;
    justify-content: center;
    &:hover {
      cursor: pointer;
    }
  }
`;

export const MobileMenu = styled.div`
  display: inline-block;
  position: fixed;
  width: 90%;
  height: 100%;
  box-sizing: border-box;
  z-index: 999;
  @media (min-width: 48rem) {
    display: none;
  }
`;

export const LoadMoreButton = styled.button`
  margin-top: 1.875rem;
  margin-bottom: 1.875rem;
  padding: 0;
  width: 100%;
  max-width: 100%;
  height: 3.125rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: .625rem;
  border: 0;
  background-color: #00b4e4;
`;

export const LoadMoreText = styled.p`
  color: #fff;
  font-size: 1.5em;
  font-weight: 700;
  &:hover {
    cursor: pointer;
    color: black;
  }
`;
