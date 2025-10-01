import React from "react";

export default function MovieCard({ movie, onRemove }) {
  const { title, genre, rating } = movie;
  return (
    <article className="movie-card" aria-label={title}>
      <h3 className="movie-title">{title}</h3>
      <p><strong>Genre:</strong> {genre}</p>
      <p><strong>Rating:</strong> {rating}</p>
      <div className="card-actions">
        <button className="remove-btn" onClick={onRemove} aria-label={`Remove ${title}`}>
          Remove
        </button>
      </div>
    </article>
  );
}