"use client";

import Card from "@/components/Card";
import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Page() {
  const [movies, setMovies] = useState([]);

  const [searchTerm, setSearchTerm] = useState("kurtlar");

  async function loadMovies(searchTerm) {
    const URL = `http://www.omdbapi.com/?s=${searchTerm}&apikey=78dfb7d`;
    const response = await axios.get(URL);
    if (response.data) {
      setMovies(response.data.Search);
    } else {
    }
  }

  useEffect(() => {
    loadMovies(searchTerm);
  }, [searchTerm]);
  return (
    <div>
    
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {movies?.map((movie, index) => {
          return <Card key={movie.id} movie={movie} />;
        })}
      </div>
    </div>
  );
}
