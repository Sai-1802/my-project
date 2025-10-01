import React from "react";

export default function RestaurantCard({ restaurant }) {
  if (!restaurant) return null;
  const { name,cuisine,id } = restaurant;

  return (
    <article className="card" aria-labelledby={`rest-${id}`}>
      <h3 id={`rest-${id}`} className="card-title">{name}</h3>
      <p className="card-meta"><strong>Cuisine:</strong> {cuisine}</p>
    </article>
  );
}