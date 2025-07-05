import { configureStore } from "@reduxjs/toolkit";
import { booksApi } from "@/shared/api/books";
import { setupListeners } from "@reduxjs/toolkit/query";
import filterReducer from "./filter-slice";

export const store = configureStore({
  reducer: {
    filter: filterReducer,
    [booksApi.reducerPath]: booksApi.reducer,
  },
  middleware: (get) => get().concat(booksApi.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
