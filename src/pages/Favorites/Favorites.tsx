import { useLocalStorage } from "@/shared/hooks/useLocaleStorage";
import style from "./Favorites.module.css";
import { Book } from "@/widgets/Book/Book";
import type { IBook } from "@/shared/types/books";

export default function Favorites() {
  const { favorites } = useLocalStorage("favorites", []);

  return (
    <div className={style.list}>
      {favorites.map((book: IBook) => (
        <Book key={book.id} book={book} />
      ))}
    </div>
  );
}
