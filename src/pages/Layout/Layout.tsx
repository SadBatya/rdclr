import { Header } from "@/widgets";
import { Outlet } from "react-router";
import style from "./Layout.module.css";

export default function Layout() {
  return (
    <>
      <Header />
      <div className={style.container}>
        <Outlet />
      </div>
    </>
  );
}
