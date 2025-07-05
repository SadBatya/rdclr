"use client";
import style from "./Home.module.css";
import { Book } from "@/widgets/Book/Book";
import { Input } from "@/shared/ui/Input/Input";
import { useGetBooksQuery } from "@/shared/api/books";
import { useDebounce } from "@/shared/hooks/useDebounce";
import { useGetBookByNameQuery } from "@/shared/api/books";
import { useState } from "react";

export default function Home() {
  const [searhValue, setSearchValue] = useState<string>("");
  const debouncedValue = useDebounce(searhValue, 500);
  const { data } = useGetBooksQuery("books");
  const { data: bookByName, isError } = useGetBookByNameQuery(debouncedValue, {
    skip: !debouncedValue,
  });

  return (
    <div className={style.app}>
      <Input
        placeholder="Поиск..."
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <div className={style.list}>
        {bookByName?.items?.length === 0 && (
          <p className={style.message}>Ничего не найдено :(</p>
        )}
        {isError && (
          <p className={style.message}>
            Ошибка :(
            <br />
            Попробуйте обновить страницу
          </p>
        )}
        {bookByName && bookByName?.items?.length > 0
          ? bookByName?.items?.map((book) => <Book key={book.id} book={book} />)
          : data?.items?.map((book) => <Book key={book.id} book={book} />)}
      </div>
    </div>
  );
}
