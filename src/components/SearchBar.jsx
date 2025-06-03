import React from "react";

function SearchBar({ searchTerm, onSearchTerm }) {
  return (
    <div className="w-full">
      <form className="mx-auto max-w-4xl">
        <input
          type="text"
          placeholder=" Search for a book..."
          value={searchTerm}
          onChange={(e) => onSearchTerm(e.target.value)}
          className="w-full  px-5 py-6 mb-3 text-base text-gray-800 placeholder-gray-500
                     border border-gray-300 rounded-2xl shadow-sm 
                     focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
                     transition duration-300 ease-in-out"
        />
      </form>
    </div>
  );
}

export default SearchBar;
