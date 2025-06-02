import React from 'react'
import { useState } from 'react';
import Header from './Header';
import SearchBar from './SearchBar';
import BookList from './BookList';
import { Books } from './../data';

function Boimela() {
  const [books, setBooks] = useState(Books);
  const [searchTerm, setSearchTerm] = useState('');
  const toggleFeatured = (id) => {
        setBooks(
            books.map((book) =>
                book.id === id ? { ...book, featured: !book.featured } : book
            )
        );
    };
  return (
    <div>
      <Header/>
      <SearchBar searchTerm={searchTerm} onSearchTerm={setSearchTerm} />
      <BookList searchTerm={searchTerm} books={books} onFeatureBook={toggleFeatured} />
    </div>
  )
}

export default Boimela