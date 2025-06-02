import React from "react";

function BookDetails({ title, cover, description, author }) {
  return (
    <div className="">
      <img
        src={cover}
        alt="cover"
        className="w-40 h-60 object-cover rounded-md shadow-md"
      />

      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">
        {title}
      </h1>
      <h2 className="text-xl sm:text-2xl font-semibold text-gray-600">
        {author}
      </h2>
      <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
        {description}
      </p>
    </div>
  );
}

export default BookDetails;
