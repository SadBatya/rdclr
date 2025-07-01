import { CustomLink } from "@/shared/ui/CustomLink/CustomLink";
import { Link } from "react-router";
import style from "./Header.module.css";

export const Header = () => (
  <header className={style.header}>
    <div className={style.container}>
      <Link to="/">
        <img className={style.logo} src="/logo.svg" alt="RDCLR Books Store" />
      </Link>
      <nav className={style.nav}>
        <CustomLink to="/">Главная</CustomLink>
        <CustomLink to="/favorites">Избранное</CustomLink>
      </nav>
    </div>
  </header>
);
