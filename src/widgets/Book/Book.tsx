import { Button } from "@/shared/ui/Button/Button";
import style from "./Book.module.css";
import { Link } from "react-router";
import { getYear } from "@/shared/utils/geyYear";

interface Props {
  id: string;
  img: string;
  title: string;
  date: string;
  rating: number;
  language: string;
}

export const Book = ({ id, img, title, date, rating, language }: Props) => (
  <Link to={`/book/${id}`} className={style.book}>
    <img className={style.img} src={img} alt="" />
    <div className={style.info}>
      <h3 className={style.title}>{title}</h3>
      <div className={style.subInfo}>
        <span>{getYear(date)} г.</span>
        <span>{rating}</span>
        <span>{language}</span>
      </div>
    </div>
    <Button onClick={() => {}}>Добавить в избранное</Button>
  </Link>
);
