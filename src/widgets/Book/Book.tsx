import { Button } from "@/shared/ui/Button/Button";
import style from "./Book.module.css";
import { Link } from "react-router";
import { getYear } from "@/shared/utils/geyYear";
import { useLocalStorage } from "@/shared/hooks/useLocaleStorage";
import type { IBook } from "@/shared/types/books";
import { spliceTitle } from "@/shared/utils/spliceTitle";
import { toast } from "react-toastify";

interface Props {
  book: IBook;
}

export const Book = ({ book }: Props) => {
  const { isFavorite, removeFromFavorites, addToFavorites } = useLocalStorage(
    "favorites",
    []
  );

  const toggleFavorite = () => {
    if (isFavorite(book?.id || "")) {
      removeFromFavorites(book?.id || "");
      toast.error("Книга удалена из избранного");
    } else {
      addToFavorites(book!);
      toast.success("Книга добавлена в избранное");
    }
  };

  const isFavoriteBook = isFavorite(book?.id || "");

  return (
    <Link to={`/book/${book.id}`} className={style.book}>
      <img
        className={style.img}
        src={book.volumeInfo.imageLinks?.thumbnail || ""}
        alt=""
      />
      <div className={style.info}>
        <h3 className={style.title}>{spliceTitle(book.volumeInfo.title)}</h3>
        <div className={style.subInfo}>
          <span>{getYear(book.volumeInfo.publishedDate || "")} г.</span>
          <span>{book.volumeInfo.averageRating}</span>
          <span>{book.volumeInfo.language}</span>
        </div>
      </div>
      <Button
        onClick={() => {
          toggleFavorite();
        }}
        active={isFavoriteBook}
      >
        {isFavoriteBook ? "Удалить из избранного" : "Добавить в избранное"}
      </Button>
    </Link>
  );
};
