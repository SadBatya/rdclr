import "./index.css";
import { App } from "./pages/Home/App";
import { createBrowserRouter, RouterProvider } from "react-router";
import ReactDOM from "react-dom/client";
import { Layout } from "./pages/Layout/Layout";
import { BookDetail } from "./pages/Book/BookDetail";
import { Favorites } from "./pages/Favorites/Favorites";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <App />,
      },
      {
        path: "favorites",
        element: <Favorites />,
      },
      {
        path: "book/:id",
        element: <BookDetail />,
      },
    ],
  },
]);

const root = document.getElementById("root");

ReactDOM.createRoot(root!).render(
  <>
    <RouterProvider router={router} />
  </>
);
