import {
  FooterContainer,
  ItemsContainer,
  Logo,
  LogoContainer,
  MainItem,
  SecondaryItem,
  TextContainer,
} from "./Footer.styles";

import logo from "/home/khaled/Desktop/React/MovieApp/my-app/src/assets/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg";

const MainItems = [
  {
    name: "THE BASICS",
    secondaryItems: [
      "About TMDB",
      "Contact Us",
      "Support Forums",
      "API",
      "System Status",
    ],
  },
  {
    name: "GET INVOLVED",
    secondaryItems: ["Contribution Bible", "Add New Movie", "Add New TV Show"],
  },
  {
    name: "COMMUNITY",
    secondaryItems: ["Guidlines", "Discussions", "Leaderboard", "Twitter"],
  },
  {
    name: "LEGAL",
    secondaryItems: ["Terms of Use", "API Terms of Use", "Privacy Policy"],
  },
];

const Footer = () => {
  return (
    <FooterContainer>
      <LogoContainer>
        <Logo img={logo}></Logo>
        <TextContainer>Join The Community!</TextContainer>
      </LogoContainer>
      {MainItems.map((item) => (
        <ItemsContainer>
          <MainItem>{item.name}</MainItem>
          {item.secondaryItems.map((secondaryItem) => (
            <SecondaryItem>{secondaryItem}</SecondaryItem>
          ))}
        </ItemsContainer>
      ))}
    </FooterContainer>
  );
};

export default Footer;
