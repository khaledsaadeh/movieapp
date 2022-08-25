import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import Card from "./Components/Card/Card";
import Sort from "./Components/Sort/Sort";
import { MainContainer } from "./Components/PageContainer/PageContainer.styles";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <MainContainer>
        <Sort></Sort>
        <Card></Card>
      </MainContainer>
      <Footer />
    </div>
  );
}

export default App;
