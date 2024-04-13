import { useState, useEffect } from "react";
import LogoIcon from "./LogoIcon";

import "../styles/Header.css";
import SunIcon from "./SunIcon";
import MoonIcon from "./MoonIcon";

const Header = () => {
  const [theme, setTheme] = useState(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      return "dark";
    }

    return "light";
  });

  useEffect(() => {
    if (theme === "dark") {
      document.querySelector("html")!.classList.add("dark");
    } else {
      document.querySelector("html")!.classList.remove("dark");
    }
  }, [theme]);

  const handleChangeTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };
  return (
    <header className="Header">
      <div className="container">
        <figure className="Header-logo">
          <LogoIcon />
        </figure>
        <button
          className="Header-switch__theme"
          aria-label="Change to light theme"
          onClick={handleChangeTheme}
        >
          {theme === "light" ? <MoonIcon /> : <SunIcon />}
        </button>
      </div>
    </header>
  );
};

export default Header;
