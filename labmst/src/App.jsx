import React, { useState } from "react";
import MovieCard from "./components/MovieCard";
import "./App.css";

const initialMovies = [
  { id: 1, title: "Inception", genre: "Sci‑Fi", rating: 8.8 },
  { id: 2, title: "The Godfather", genre: "Crime", rating: 9.2 },
  { id: 3, title: "Spirited Away", genre: "Animation", rating: 8.6 },
];

export default function App() {
  const [movies, setMovies] = useState(initialMovies);

  const removeMovie = (id) => {
    // optional: add confirm: if (!confirm("Remove this movie?")) return;
    setMovies((prev) => prev.filter((m) => m.id !== id));
  };

  return (
    <div className="app">
      <h1>Movie List</h1>
      {movies.length === 0 ? (
        <p className="empty">No movies in the list.</p>
      ) : (
        <div className="movies-grid">
          {movies.map((movie) => (
            <MovieCard
              key={movie.id}
              movie={movie}
              onRemove={() => removeMovie(movie.id)}
            />
          ))}
        </div>
      )}
    </div>
  );
}