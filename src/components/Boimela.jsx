import React, { useState } from "react";
import { Books } from "../data";
import Header from "./Header";
import SearchBar from "./SearchBar";
import BookList from "./BookList";

function Boimela() {
  const [searchTerm, setSearchTerm] = useState("")
  return (
    <div className="container mx-auto px-4 py-6 space-y-6">
      <Header />
      <SearchBar searchTerm={searchTerm} onSearchTerm={setSearchTerm} />
      <BookList searchTerm={searchTerm} books={Books}/>
    </div>
  );
}

export default Boimela;
