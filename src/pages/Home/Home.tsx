"use client";
import style from "./Home.module.css";
import { getBooks } from "@/shared/api/get-books";
import { Book } from "@/widgets/Book/Book";
import { useEffect, useState } from "react";

export const Home = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const { data } = await getBooks();
      setBooks(data.items);
    }
    fetchData();
  }, []);

  return (
    <div className={style.app}>
      <div className={style.list}>
        {books.map((book) => (
          <Book
            key={book.id}
            id={book.id}
            img={book.volumeInfo.imageLinks.thumbnail}
            title={book.volumeInfo.title}
            date={book.volumeInfo.publishedDate}
            rating={book.volumeInfo.averageRating}
            language={book.volumeInfo.language}
          />
        ))}
      </div>
    </div>
  );
};
