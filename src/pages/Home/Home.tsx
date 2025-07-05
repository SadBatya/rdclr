"use client";
import style from "./Home.module.css";
import { Book } from "@/widgets/Book/Book";
import { Input } from "@/shared/ui/Input/Input";
import { useGetBooksQuery } from "@/shared/api/books";

export default function Home() {
  const { data } = useGetBooksQuery("books");

  return (
    <div className={style.app}>
      <Input placeholder="Поиск..." />
      <div className={style.list}>
        {data?.items?.map((book) => (
          <Book key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
}
