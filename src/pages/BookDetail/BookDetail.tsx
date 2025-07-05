import { Button } from "@/shared/ui/Button/Button";
import style from "./BookDetail.module.css";
import { useParams } from "react-router";
import { getYear } from "@/shared/utils/geyYear";
import { internalPath } from "@/shared/routes/path";
import { CustomLink } from "@/shared/ui/CustomLink/CustomLink";
import { useLocalStorage } from "@/shared/hooks/useLocaleStorage";
import { useGetCurrentBookQuery } from "@/shared/api/books";

export default function BookDetail() {
  const { id } = useParams();
  const { data: book } = useGetCurrentBookQuery(id || "");

  const { isFavorite, addToFavorites, removeFromFavorites } = useLocalStorage(
    "favorites",
    []
  );

  const toggleFavorite = () => {
    if (isFavorite(book?.id || "")) {
      removeFromFavorites(book?.id || "");
    } else {
      addToFavorites(book!);
    }
  };

  console.log(book, "book");

  return (
    <div className={style.container}>
      <img
        className={style.img}
        src={book?.volumeInfo.imageLinks?.thumbnail || ""}
        alt={book?.volumeInfo.title}
      />
      <div className={style.info}>
        <CustomLink to={internalPath.home} className={style.button__nav}>
          Назад
        </CustomLink>
        <h3 className={style.title}>{book?.volumeInfo.title}</h3>
        <div className={style.subinfo}>
          <span>{getYear(book?.volumeInfo.publishedDate || "")} г</span>
          <span>{book?.volumeInfo.averageRating ?? "Нет оценки"}</span>
          <span>{book?.volumeInfo.language?.toUpperCase()}</span>
        </div>
        <Button
          className={style.button}
          onClick={() => {
            toggleFavorite();
          }}
        >
          {isFavorite(book?.id || "")
            ? "Удалить из избранного"
            : "Добавить в избранное"}
        </Button>
        <p className={style.description}>{book?.volumeInfo.description}</p>
      </div>
    </div>
  );
}
