"use client";
import style from "./Home.module.css";
import { getBooks } from "@/shared/api/get-books";
import { Book } from "@/widgets/Book/Book";
import { useEffect, useState } from "react";
import { type IBook } from "@/shared/types/books";
import { Loading } from "@/shared/ui/Loading/Loading";

export const Home = () => {
  const [books, setBooks] = useState<IBook[]>([]);

  useEffect(() => {
    async function fetchData() {
      const { data } = await getBooks();
      console.log(data);
      setBooks(data.items);
    }
    fetchData();
  }, []);

  return (
    <div className={style.app}>
      <Loading />
      <div className={style.list}>
        {books.map((book) => (
          <Book
            key={book.id}
            id={book.id}
            img={book.volumeInfo.imageLinks?.thumbnail || ""}
            title={book.volumeInfo.title || ""}
            date={book.volumeInfo.publishedDate || ""}
            rating={book.volumeInfo.averageRating || 0}
            language={book.volumeInfo.language || ""}
          />
        ))}
      </div>
    </div>
  );
};
