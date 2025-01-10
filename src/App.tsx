import "./App.scss";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Marquee from "react-fast-marquee";

function App() {
  return (
    <section id="wrapper">
      <Marquee>
        Національний університет «Львівська політехніка» | Lviv Polytechnic |
        National University | Національний університет «Львівська політехніка» |
        Lviv Polytechnic National University | Національний університет
        «Львівська політехніка» | Lviv Polytechnic National University
      </Marquee>
      <Header />
      <Main />
      <Footer />
    </section>
  );
}

export default App;
