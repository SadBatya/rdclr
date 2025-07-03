import { useState, useEffect } from "react";
import { type IBook } from "@/shared/types/books";

export function useLocalStorage(key: string, initialValue: IBook[]) {
  const [value, setValue] = useState<IBook[]>(() => {
    if (typeof window !== "undefined") {
      const storedValue = localStorage.getItem(key);
      return storedValue ? JSON.parse(storedValue) : initialValue;
    }
    return initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  const addToFavorites = (book: IBook) => {
    setValue((prev: IBook[]) => {
      const isBookInFavorites = prev.some((item) => item.id === book.id);

      if (!isBookInFavorites) {
        return [...prev, book];
      }
      return prev;
    });
  };

  const removeFromFavorites = (id: string) => {
    setValue((prev: IBook[]) => prev.filter((item) => item.id !== id));
  };

  const isFavorite = (id: string) => {
    if (!value) return false;
    return value.some((item) => item.id === id);
  };

  return {
    favorites: value,
    setFavorites: setValue,
    addToFavorites,
    removeFromFavorites,
    isFavorite,
  };
}
