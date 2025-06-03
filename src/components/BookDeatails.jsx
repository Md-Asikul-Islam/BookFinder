import React from "react";

function BookDetails({ title, cover, description, author }) {
  return (
    <div className="flex gap-x-[2rem] ">
      <img
        src={cover}
        alt="cover"
        className="w-[6rem] sm:[6rem] md:w-[8rem] lg:w-[12rem] xl:w-[16rem] h-auto ronded-lg"
      />
      <div>
        <h1 className="text-[2rem] sm:text-[2rem] md:text-[2.5rem] font-bold text-black">
          {title}
        </h1>
        <h2 className="text-[1.6rem] sm:text-[1.6rem] md:text-[1.8rem] font-semibold text-black mt-1">
          {author}
        </h2>
        <p className="text-[1.3rem] sm:text-[1.3rem] md:text-[1.5rem] lg:text-[1.7rem] xl:text-[1.8rem] text-gray-500 mt-2">
          {description}
        </p>
      </div>
    </div>
  );
}

export default BookDetails;
