import React from 'react'
import BookDeatails from './BookDeatails'
import FeatureBook from './FeatureBook';

function BookRow({book, onFeatureBook}) {
  return (
    <div className="">
        <BookDeatails title={book.title} cover={book.cover} description={book.description} author={book.author}  />
        <FeatureBook book={book} onFeatureBook={onFeatureBook} />
    </div>
  )
}

export default BookRow