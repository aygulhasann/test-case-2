import React from "react";
import Card from "./Card";

export default function Results({ movies }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {movies?.map((movie) => (
        <Card key={movie.id} movie={movie} />
      ))}
    </div>
  );
}
