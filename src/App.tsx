import "./App.scss";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Marquee from "react-fast-marquee";
import React from "react";

function App() {
  const [language, setLanguage] = React.useState<string>("ua");

  return (
    <section id="wrapper">
      <Marquee>
        Національний університет «Львівська політехніка» | Lviv Polytechnic |
        National University | Національний університет «Львівська політехніка» |
        Lviv Polytechnic National University | Національний університет
        «Львівська політехніка» | Lviv Polytechnic National University
      </Marquee>
      <Header curentLanguage={language} changeLanguage={setLanguage} />
      <Main />
      <Footer curentLanguage={language} />
    </section>
  );
}

export default App;
