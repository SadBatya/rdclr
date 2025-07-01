import { Link } from "react-router";
import style from "./Header.module.css";

export const Header = () => (
  <header className={style.header}>
    <div className={style.container}>
      <img className={style.logo} src="/logo.svg" alt="RDCLR Books Store" />
      <nav className={style.nav}>
        <Link to="/">Главная</Link>
        <Link to="/favorites">Избранное</Link>
      </nav>
    </div>
  </header>
);
