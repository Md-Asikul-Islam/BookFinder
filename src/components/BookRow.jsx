import React from 'react'
import BookDeatails from './BookDeatails'
import FeatureBook from './FeatureBook';

function BookRow({book, onFeatureBook}) {
  return (
    <div className=" w-[clamp(20rem,50vw,80rem)] h-[16rem] sm:h-auto flex-grow-1 overflow-hidden md:h-[18rem] lg:h-[16rem] mx-auto mb-4 p-4 shadow-xl hover:shadow-2xl transition-shadow rounded-2xl bg-white flex gap-x-[1rem] ">
        <BookDeatails title={book.title} cover={book.cover} description={book.description} author={book.author}  />
        <FeatureBook book={book} onFeatureBook={onFeatureBook} />
    </div>
  )
}

export default BookRow