import React from "react";
import IconeTopBar from "../img/iconeTopBar.png";
import "./TopBar.css";

function TopBar() {
  return (
    <div className="topBar">
      <nav>
        <img src={IconeTopBar} />
        <h1>Minha divisão de dinheiro</h1>
      </nav>
    </div>
  );
}

export default TopBar;
