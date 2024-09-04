"use client"; // Client Component olarak işaretleyin

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'next/navigation'; 
//useParams dinamik URl segmentlerini almak için kullanacakmışız örn: /movie/:id rotasından useParams ile id yi alabiliriz

export default function MoviePage() {
  const { id } = useParams(); 
  const [movieDetails, setMovieDetails] = useState(null);
  
  useEffect(() => {  //id degişirse çalışsın, detaları al
    
    if (!id) return; //id bulamazsan dur diyo

    async function fetchMovieDetails() {
      try {
        const URL = `http://www.omdbapi.com/?i=${id}&apikey=78dfb7d`;
        const response = await axios.get(URL);
        if (response.data && response.data.Response === "True") {
          setMovieDetails(response.data);
        } else {
          console.error('No data found or error in response');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchMovieDetails(); //fonksiyonu getir diyo
  }, [id]);              //sadece id değişirse useE. tekrar çalışşın

  if (!movieDetails) {
    return <div className="text-center text-xl mt-10">Loading...</div>;
  }

  
  const defaultPoster = '/images/default-poster.jpeg';

  return (
    <div className="p-6 max-w-4xl mx-auto bg-white rounded-lg shadow-lg">
      <div className="flex items-start space-x-6">
        <img 
          src={movieDetails.Poster === "N/A" ? defaultPoster : movieDetails.Poster} 
          alt={movieDetails.Title} 
          className="w-48 h-auto rounded-lg shadow-md"
        />
        <div className="flex-1">
          <h1 className="text-3xl font-bold mb-4">{movieDetails.Title}</h1>
          <p className="text-lg mb-2"><strong>Type:</strong> {movieDetails.Type}</p>
          <p className="text-lg mb-2"><strong>Year:</strong> {movieDetails.Year}</p>
          <p className="text-lg mt-4"><strong>Plot:</strong> {movieDetails.Plot}</p>
        </div>
      </div>
    </div>
  );
}
