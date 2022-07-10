import "../App.css";
import SearchBar from "./Search-bar";
// import { useState } from "react";
function Header() {
  return (
    <div className="Header">
      <p>Home library Builder</p>
      <SearchBar />
    </div>
  );
}

export default Header;
