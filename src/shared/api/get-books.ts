import axios from "axios";

export const getBooks = () => {
  return axios.get("https://www.googleapis.com/books/v1/volumes", {
    params: {
      q: "books",
      key: import.meta.env.VITE_GOOGLE_API_KEY,
      maxResults: 10,
    },
  });
};
