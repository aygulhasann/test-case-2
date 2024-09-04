"use client";

import Link from "next/link";
import React from "react";

const Card = ({ movie }) => {
  const defaultPoster = "/images/default-poster.jpeg";
  console.log(movie);

  // eğer posteri yoksa default atayacam diyo
  const poster =
    movie.Poster && movie.Poster !== "N/A" ? movie.Poster : defaultPoster;

  return (
    <Link href={`movie/${movie.imdbID}`}>
      <div
        className="flex flex-col items-center border border-gray-200 shadow-lg rounded-2xl overflow-hidden transition-transform transform hover:scale-[101%] w-full sm:w-64 cursor-pointer" // tıklanabilir yapmak için cursor-pointer ekledik
      >
        <div className="w-full h-80 relative">
          <img
            className="absolute inset-0 w-full h-full object-cover"
            src={poster}
            alt={movie.Title}
          />
        </div>
        <div className="p-2 text-center">
          <h2 className="text-sm font-semibold mb-1 truncate">{movie.Title}</h2>
          <p className="text-gray-600 text-xs">Year: {movie.Year}</p>
        </div>
      </div>
    </Link>
  );
};

export default Card;
