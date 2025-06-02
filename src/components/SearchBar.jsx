import React from "react";

function SearchBar({searchTerm, onSearchTerm}) {
  
  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="Search for books..."
          value={}
          className="w-full px-4 py-2 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200 text-base sm:text-lg"
        />
      </form>
    </div>
  );
}

export default SearchBar;
