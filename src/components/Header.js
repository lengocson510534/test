import React from "react";
import Input from "../UI/Input";

import "./header.css";

const Header = () => {
  return (
    <header>
      <img
        src="https://w7.pngwing.com/pngs/523/198/png-transparent-google-logo-google-search-google-play-google-text-logo-number.png"
        alt="logoImg"
        className="header__logo"
      />
      <Input type="text" placeholder="Search Google or type a URL" />
    </header>
  );
};

export default Header;
