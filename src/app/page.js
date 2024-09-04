"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import SearchBox from "@/components/SearchBox";
import Results from "@/components/Results";

export default function Page() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("john");

  async function loadMovies(searchTerm) { //asenkron çalışacak fonk. tanımlandı
    const URL = `http://www.omdbapi.com/?s=${searchTerm}&apikey=78dfb7d`;
    const response = await axios.get(URL); //url ye get yolladı ve yanıtı resp. atadı 
    if (response.data) {
      setMovies(response.data.Search || []); //mevcutsa r.d.s. setMovies'e ata
    } else {
      console.error("No movies found");
    }
  }

  useEffect(() => {
    loadMovies(searchTerm);
  }, [searchTerm]);   //sT değiştiğinde çalışacak. hook tekrar çalışack 

  return (
    <div>
      <SearchBox searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <Results movies={movies} />
    </div>
  );
}
