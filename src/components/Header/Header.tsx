import React from "react";
import "./Header.scss";

//Burger
import { Spin as Hamburger } from "hamburger-react";

//Multylanguage
import ua from "../translations/ua.json";
import en from "../translations/en.json";

//interface
interface HeaderProps {
  curentLanguage: string;
  changeLanguage: (language: string) => void;
}

export default function Header({
  curentLanguage,
  changeLanguage,
}: HeaderProps) {
  const [isOpen, setOpen] = React.useState(false);
  React.useEffect(() => {
    localStorage.setItem("current-language", curentLanguage);
  }, [curentLanguage]);

  const [isScrolled, setScroll] = React.useState(false);

  window.addEventListener("scroll", () => {
    if (window.scrollY > 113) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  });

  return (
    <header id="header" className={isScrolled ? "scrolled" : ""}>
      <div id="header-logo-wrapper">
        <img
          src="./public/logos/Logo 1.png"
          id="header-logo"
          alt="header-logo"
        />
        <img
          src={curentLanguage === "en" ? en.header.logoImg : ua.header.logoImg}
          id="header-logo-text"
          alt="header-logo-text"
        />
      </div>

      <div className="burger-wrapper">
        <Hamburger toggled={isOpen} toggle={setOpen} />
      </div>
      <nav className={`header-menu ${isOpen ? "" : "hidden"}`}>
        <ul id="menu-list">
          <li className="menu-item">
            <a href="#" className="menu-link">
              {curentLanguage === "en" ? en.header.nav[0] : ua.header.nav[0]}
            </a>
          </li>
          <li className="menu-item">
            <a href="#" className="menu-link">
              {curentLanguage === "en" ? en.header.nav[1] : ua.header.nav[1]}
            </a>
          </li>
          <li className="menu-item">
            <a href="#" className="menu-link">
              {curentLanguage === "en" ? en.header.nav[2] : ua.header.nav[2]}
            </a>
          </li>
          <li className="menu-item">
            <a href="#" className="menu-link">
              {curentLanguage === "en" ? en.header.nav[3] : ua.header.nav[3]}
            </a>
          </li>
          <li className="menu-item">
            <a href="#" className="menu-link">
              {curentLanguage === "en" ? en.header.nav[4] : ua.header.nav[4]}
            </a>
          </li>
          <li className="menu-item">
            <a href="#" className="menu-link">
              {curentLanguage === "en" ? en.header.nav[5] : ua.header.nav[5]}
            </a>
          </li>
          <li className="menu-item country">
            <a
              href="#"
              onClick={() => changeLanguage("ua")}
              className="menu-link-country"
              data-id="ua"
            >
              <img src="/public/ua.svg" alt="UA" />
            </a>
            <div className="vr-header"></div>
            <a
              href="#"
              onClick={() => changeLanguage("en")}
              className="menu-link-country"
              data-id="en"
            >
              <img src="/public/en.svg" alt="EN" />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
