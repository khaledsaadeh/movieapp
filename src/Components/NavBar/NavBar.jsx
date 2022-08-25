import {
  AddContainer,
  Bell,
  Burger,
  Container,
  ContentContainer,
  EnButton,
  Head,
  LeftContainer,
  LogoDiv,
  PhoneContainer,
  PhoneLogo,
  PhoneMenu,
  PhoneRightContainer,
  RightContainer,
  Search,
  WordsDiv,
} from "./NavBar.styles";
import logo from "/home/khaled/Desktop/React/MovieApp/my-app/src/assets/image1.svg";
import add from "/home/khaled/Desktop/React/MovieApp/my-app/src/assets/add.svg";
import { useState } from "react";
import PhoneMenuItems from "../PhoneMenuItems/PhoneMenuItems";


const NavBar = () => {
  const [isClicked, setIsClicked] = useState(false);

  const clickHandler = () => {
    setIsClicked(!isClicked);
  };
  return (
    <div>
      <PhoneContainer>
        <Burger onClick={clickHandler} />
        <PhoneLogo />
        <PhoneRightContainer>
          <Bell />
          <Head />
          <Search />
        </PhoneRightContainer>
      </PhoneContainer>
      <PhoneMenu isClicked={isClicked}>
        <PhoneMenuItems />
      </PhoneMenu>
      <Container>
        <ContentContainer>
          <LeftContainer>
            <LogoDiv>
              <img src={logo} alt="" />
            </LogoDiv>
            <WordsDiv>
              <div>Movies</div>
              <div>TV Shows</div>
              <div>People</div>
              <div>More</div>
            </WordsDiv>
          </LeftContainer>
          <RightContainer>
            <AddContainer>
              <img src={add}></img>
            </AddContainer>
            <EnButton> EN </EnButton>
            <WordsDiv>
              <div>Login</div>
              <div>Join TMDB</div>
              <div>Search</div>
            </WordsDiv>
          </RightContainer>
        </ContentContainer>
      </Container>
    </div>
  );
};

export default NavBar;
