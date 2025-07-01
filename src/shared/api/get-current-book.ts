import axios from "axios";
import { type IBook } from "../types/books";

export const getCurrentBook = (id: string) => {
  return axios.get<IBook>(`https://www.googleapis.com/books/v1/volumes/${id}`, {
    params: {
      key: import.meta.env.VITE_GOOGLE_API_KEY,
    },
  });
};
