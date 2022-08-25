import { useContext } from "react";
import { ButtonContext } from "../Context/ButtonContext";
import { SearchButton, SearchText } from "./Button.style";

const Button = (props) => {
  const { blueButton } = useContext(ButtonContext);

  return (
    <SearchButton blueButton={blueButton} onClick={props.onSubmitSearch}>
      <SearchText blueButton={blueButton}>{props.buttonText}</SearchText>
    </SearchButton>
  );
};
export default Button;
