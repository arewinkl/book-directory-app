import "./App.css";
// import { useState } from "react";
function SearchBar() {
  return (
    <div className="Header">
      <form>
        <div>
          search for books:
          <input className="searchbar-inputs" placeholder="book search"></input>
        </div>
        <input
          className="searchbar-inputs"
          type="button"
          value="start a collection +"
        ></input>
        <input
          className="searchbar-inputs"
          type="button"
          value="view popular collections"
        ></input>
        <input
          className="searchbar-inputs"
          type="buttons"
          value="Find Bookstores"
        ></input>
      </form>
    </div>
  );
}

export default SearchBar;

//dropdown menu
//Build a collection button
//Look at other collections
//search for new books
//wishlist
