import { useState, useEffect } from "react";

export const useTrending = () => {
  const [trendingMovies] = useState([]);
  const [loading] = useState(false);
  const [error] = useState("");

  useEffect(() => {}, []);

  return { trendingMovies, loading, error };
};