import { useEffect, useState } from "react";

export const useFavorites = () => {
  const [favs, setFavs] = useState([]);
  useEffect(() => {
    // const storedFavs = JSON.parse(localStorage.getItem("favs"));
    localStorage.setItem("fav", JSON.stringify(favs));
  }, [favs]);
  return { favs, setFavs };
};
