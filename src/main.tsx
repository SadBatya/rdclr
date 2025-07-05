import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router";
import ReactDOM from "react-dom/client";

import { Loading } from "./shared/ui/Loading/Loading";
import { Suspense, lazy } from "react";
import { store } from "@/shared/store/store";
import { Provider } from "react-redux";

const Home = lazy(() => import("./pages/Home/Home"));
const BookDetail = lazy(() => import("./pages/BookDetail/BookDetail"));
const Favorites = lazy(() => import("./pages/Favorites/Favorites"));
const Layout = lazy(() => import("./pages/Layout/Layout"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<Loading />}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: "favorites",
        element: (
          <Suspense fallback={<Loading />}>
            <Favorites />
          </Suspense>
        ),
      },
      {
        path: "book/:id",
        element: (
          <Suspense fallback={<Loading />}>
            <BookDetail />
          </Suspense>
        ),
      },
    ],
  },
]);

const root = document.getElementById("root");

ReactDOM.createRoot(root!).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
