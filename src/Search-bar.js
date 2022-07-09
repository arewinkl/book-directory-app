import "./App.css";
// import { useState } from "react";
function SearchBar() {
  return (
    <div className="Header">
      <div>
        <form>
          <input placeholder="book search"></input>
          <input type="button" value="start a collection"></input>
          <input type="button" value="view popular collections"></input>
        </form>
      </div>
    </div>
  );
}

export default SearchBar;

//dropdown menu
//Build a collection button
//Look at other collections
//search for new books
//wishlist
