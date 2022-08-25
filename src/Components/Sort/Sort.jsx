import {
  Arrow,
  Container,
  SelectContainer,
  SelectText,
  SortContainer,
  SortTitle,
} from "./Sort.styles";
import Select from "../Select/Select";
import { useContext, useState } from "react";
import Button from "../Button/Button";
import { ButtonContext } from "../Context/ButtonContext";
import { SortContext } from "../Context/SortContext";

const Sort = () => {
  const [isClicked, setIsClicked] = useState(true);
  const [blueButton, setBlueButton] = useState(false);
  const [sort, setSort] = useState("");

  const sortContext = useContext(SortContext);

  const clickHandler = () => {
    setIsClicked(!isClicked);
  };

  const optionSelectHandler = (event) => {
    setBlueButton(true);
    setSort(event.target.value);
  };

  const onSubmitSearch = () => {
    setBlueButton(!blueButton);
    sortContext.sortHandler(sort);
  };

  return (
    <Container>
      <h2>Popular Movies</h2>
      <SortContainer onClick={clickHandler} isClicked={isClicked}>
        <SortTitle>Sort</SortTitle>
        <Arrow isClicked={isClicked} />
      </SortContainer>
      <ButtonContext.Provider value={{ blueButton, optionSelectHandler }}>
        {isClicked && (
          <SelectContainer>
            <SelectText>Sort Results By</SelectText>
            <Select optionSelectHandler={optionSelectHandler}></Select>
          </SelectContainer>
        )}
        <Button onSubmitSearch={onSubmitSearch} buttonText="Search" />
      </ButtonContext.Provider>
    </Container>
  );
};

export default Sort;
