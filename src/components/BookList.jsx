import React from 'react';
import BookRow from './BookRow';

function BookList({ searchTerm, books,onFeatureBook }) {
  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className=" mx-auto space-y-4 pt-[2rem] ">
      {filteredBooks.map((book) => (
        <BookRow key={book.id} book={book} onFeatureBook={onFeatureBook} />
      ))}
    </div>
  );
}

export default BookList;

