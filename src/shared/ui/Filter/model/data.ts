import { type IFilterValue, type ITitle } from "@/shared/types/filter";

interface IFilterData {
  title: ITitle;
  filterValue: IFilterValue;
}

export const filterData: IFilterData[] = [
  {
    title: "Бесплатные книги",
    filterValue: "free-ebooks",
  },
  {
    title: "Полные книги",
    filterValue: "full",
  },
  {
    title: "Платные книги",
    filterValue: "paid-ebooks",
  },
  {
    title: "Книги Google",
    filterValue: "ebooks",
  },
];
