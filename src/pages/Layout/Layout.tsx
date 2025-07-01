import { Header } from "../../widgets/Header/Header";
import { Outlet } from "react-router";

export const Layout = () => (
  <>
    <Header />
    <Outlet />
  </>
);
