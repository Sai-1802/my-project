import React, { useMemo, useState } from "react";
import RestaurantCard from "./components/RestaurantCard";
import "./App.css";

const initialRestaurants = [
  { id: 1, name: "Deccan Dose", cuisine: "Indian" },
  { id: 2, name: "POP eyes", cuisine: "American" },
  { id: 3, name: "Taco Loco", cuisine: "Mexican" },
  { id: 4, name: "AL Bhaik", cuisine: "Arabic" },
  { id: 5, name: "Dominos", cuisine: "Italian" },
  { id: 6, name: "Burger Barn", cuisine: "American" },
  { id: 7, name: "Mediterraneo", cuisine: "Mediterranean" },
  { id: 8, name: "Noodle Nest", cuisine: "Chinese" },
  { id: 9, name: "Arabesque", cuisine: "Middle Eastern" },
  { id: 10, name: "Biryani", cuisine: "Indian" },
];

export default function App() {
  const [query, setQuery] = useState("");
  const [restaurants] = useState(initialRestaurants);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return restaurants;
    return restaurants.filter((r) => r.cuisine.toLowerCase().includes(q));
  }, [query, restaurants]);

  return (
    <div className="app">
      <header className="app-header">
        <h1>Restaurants</h1>
      </header>

      <div className="toolbar">
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search by cuisine (e.g. 'Italian', 'mex')"
          aria-label="Search restaurants by cuisine"
        />
        <button
          onClick={() => setQuery("")}
          aria-label="Clear search"
          className="clear-btn"
        >
          Clear
        </button>
      </div>

      <p className="result-count">
        Showing {filtered.length} of {restaurants.length}
      </p>

      {filtered.length === 0 ? (
        <p className="empty">No restaurants match your search.</p>
      ) : (
        <div className="grid">
          {filtered.map((r) => (
            <RestaurantCard key={r.id} restaurant={r} />
          ))}
        </div>
      )}
    </div>
  );
}