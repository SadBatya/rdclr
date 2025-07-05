import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { GoogleBooksResponse, IBook } from "@/shared/types/books";

export const booksApi = createApi({
  reducerPath: "booksApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://www.googleapis.com/books/v1/volumes",
  }),
  endpoints: (builder) => ({
    getBooks: builder.query<GoogleBooksResponse, string>({
      query: () => ({
        url: "",
        params: {
          q: "books",
          key: import.meta.env.VITE_GOOGLE_API_KEY,
          maxResults: 10,
        },
      }),
    }),
    getCurrentBook: builder.query<IBook, string>({
      query: (id) => ({
        url: id,
        params: {
          q: "books",
          key: import.meta.env.VITE_GOOGLE_API_KEY,
          maxResults: 10,
        },
      }),
    }),
    getBookByName: builder.query<GoogleBooksResponse, string>({
      query: (name) => ({
        url: "",
        params: {
          q: name,
          key: import.meta.env.VITE_GOOGLE_API_KEY,
          maxResults: 10,
        },
      }),
    }),
    getInfiniteBooks: builder.infiniteQuery<
      GoogleBooksResponse,
      { query: string; filter?: string },
      number
    >({
      infiniteQueryOptions: {
        initialPageParam: 0,
        getNextPageParam: (lastPage, allPages, lastPageParam) => {
          if (!lastPage.items || lastPage.items.length < 10) return undefined;
          return lastPageParam + 10;
        },
      },
      query: ({ queryArg, pageParam }) => {
        const { query, filter } = queryArg;

        const params: Record<string, string | number> = {
          q: query,
          key: import.meta.env.VITE_GOOGLE_API_KEY,
          maxResults: 10,
          startIndex: pageParam,
        };

        if (filter?.trim()) {
          params.filter = filter;
        }

        return {
          url: "",
          params,
        };
      },
    }),
  }),
});

export const {
  useGetBooksQuery,
  useGetCurrentBookQuery,
  useGetBookByNameQuery,
} = booksApi;

export const useGetInfiniteBooksQuery =
  booksApi.endpoints.getInfiniteBooks.useInfiniteQuery;
