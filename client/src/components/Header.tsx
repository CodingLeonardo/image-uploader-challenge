import Logo from "../assets/logo.svg";
import Moon from "../assets/Moon_fill.svg";

import "../styles/Header.css";

const Header = () => {
  return (
    <header className="Header">
      <div className="container">
        <figure className="Header-logo">
          <img src={Logo} alt="Logo" />
        </figure>
        <button className="Header-button">
          <img src={Moon} alt="Moon" />
        </button>
      </div>
    </header>
  );
};

export default Header;
