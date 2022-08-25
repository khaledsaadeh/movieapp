import styled from "styled-components";

export const MainContainer = styled.div`
  display: none;

  @media (min-width: 48rem) {
    display: flex;
    position: absolute;
    align-items: center;
    background-color: #081c22;
    border-radius: 50%;
    flex-direction: column;
    height: 2.5rem;
    justify-content: center;
    left: 0.625rem;
    top: -1rem;
    width: 2.5rem;
    z-index: 100;
  }
`;

export const SvgCircle = styled.svg`
  stroke-width: 2;
  width: 2.5rem;
  height: 2.5rem;
  transform-origin: center;
  transform: rotate(270deg);
`;

export const FirstCircle = styled.circle`
  fill: none;
  stroke: ${(props) => (props.fill >= 70 ? "#122D25" : "#413D0F")}; ;
`;

export const SecondCircle = styled.circle`
  fill: none;
  stroke: ${(props) => (props.fill >= 70 ? "#4FD17B" : "#D0D230")};
  stroke-width: 2;
  stroke-dasharray: 116;
  stroke-dashoffset: ${(props) => props.vote};
`;

export const Rate = styled.p`
  position: absolute;
  color: #fff;
  font-size: 0.8em;
  font-weight: bold;
`;
