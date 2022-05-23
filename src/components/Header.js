import React from "react";
import Search from "./Search";

const Header = () => {
  return (
    <div className="head">
      <a href="/">
        <img src="../img/dota2.png" alt="logo-dota-2" />
      </a>
      <h1>Dota 2 - Heroes</h1>
      <Search />
    </div>
  );
};

export default Header;
