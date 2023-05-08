import { useEffect, useState } from "react";

export const useFavorites = () => {
  const [favorites, setFavorites] = useState(
    window.localStorage.getItem("favs") ?? []
  );

  useEffect(() => {
    const favs = JSON.parse(window.localStorage.getItem("favs"));
    if (favs) {
      setFavorites(favs);
    } else {
      window.localStorage.setItem("favs", JSON.stringify([]));
    }
  }, []);

  const setValue = (value) => {
    // Save state
    setFavorites(value);
    // Save to local storage
    if (typeof window !== "undefined") {
      window.localStorage.setItem("favs", JSON.stringify(value));
    }
  };
  return [favorites, setValue];
};
