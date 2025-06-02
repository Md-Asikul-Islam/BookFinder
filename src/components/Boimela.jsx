import React from "react";
import { Books } from "../data";
import Header from "./Header";
import SearchBar from "./SearchBar";
import BookList from "./BookList";

function Boimela() {
  return (
    <>
      <Header />
      <SearchBar />
      <BookList />
    </>
  );
}

export default Boimela;
