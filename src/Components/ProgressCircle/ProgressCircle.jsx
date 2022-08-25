import {
  FirstCircle,
  MainContainer,
  Rate,
  SecondCircle,
  SvgCircle,
} from "./ProgressCircle.styles";

function ProgressCircle({ vote, fill }) {
  return (
    <MainContainer>
      <SvgCircle>
        <FirstCircle r="18" cx="20" cy="20" fill={fill} />
        <SecondCircle r="18" cx="20" cy="20" vote={vote} fill={fill} />
      </SvgCircle>
      <Rate>{fill}%</Rate>
    </MainContainer>
  );
}

export default ProgressCircle;
