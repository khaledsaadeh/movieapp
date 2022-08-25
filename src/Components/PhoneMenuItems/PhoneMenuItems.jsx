import {
  MainItem,
  PhoneMenuContainer,
  SecondaryItem,
} from "./PhoneMenuItems.styles";

const PhoneMenuItems = () => {
  const MainItems = ["Movies", "TV Shows", "People"];
  const SecondaryItems = [
    "Contribution Bible",
    "Apps",
    "Discussions",
    "Leaderboard",
    "Contribute",
    "API",
    "Support",
    "About",
    "Login",
  ];

  return (
    <PhoneMenuContainer>
      {MainItems.map((item) => (
        <MainItem>{item}</MainItem>
      ))}
      {SecondaryItems.map((item) => (
        <SecondaryItem>{item}</SecondaryItem>
      ))}
    </PhoneMenuContainer>
  );
};

export default PhoneMenuItems;
