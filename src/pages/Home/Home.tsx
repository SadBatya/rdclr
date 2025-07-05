"use client";
import style from "./Home.module.css";
import { Book } from "@/widgets/Book/Book";
import { Input } from "@/shared/ui/Input/Input";
import { useDebounce } from "@/shared/hooks/useDebounce";
import {
  useGetBookByNameQuery,
  useGetInfiniteBooksQuery,
} from "@/shared/api/books";
import { useEffect, useState } from "react";
import { Loading } from "@/shared/ui/Loading/Loading";
import { Filter } from "@/shared/ui/Filter/Filter";
import { useSelector } from "react-redux";
import { type RootState } from "@/shared/store/store";

export default function Home() {
  const [searhValue, setSearchValue] = useState<string>("");
  const debouncedValue = useDebounce(searhValue, 500);

  const filterValue = useSelector(
    (state: RootState) => state.filter.filterValue
  );

  const { data: bookByName, isError } = useGetBookByNameQuery(debouncedValue, {
    skip: !debouncedValue,
  });

  const {
    data: infiniteBooks,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
  } = useGetInfiniteBooksQuery({
    query: "books",
    filter: filterValue,
  });

  console.log(filterValue, "filter value");

  const handleScroll = () => {
    if (
      window.innerHeight + window.scrollY >= document.body.offsetHeight - 300 &&
      hasNextPage &&
      !isFetchingNextPage
    ) {
      fetchNextPage();
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [hasNextPage, isFetchingNextPage]);

  const books = infiniteBooks?.pages.flatMap((page) => page.items || []) ?? [];

  return (
    <div className={style.app}>
      <Input
        placeholder="Поиск..."
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <Filter />
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
          : books?.map((book) => <Book key={book.id} book={book} />)}
        {isLoading && <Loading />}
      </div>
    </div>
  );
}
