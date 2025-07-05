import { useState } from "react";
import style from "./Filter.module.css";
import clsx from "clsx";
import { useClickOutside } from "@/shared/hooks/useClickOutside";
import { filterData } from "@/shared/ui/Filter/model/data";
import { type ITitle } from "@/shared/types/filter";
import { useDispatch } from "react-redux";
import { setFilterValue } from "@/shared/store/filter-slice";

export const Filter = () => {
  const [inputValue, setInputValue] = useState<ITitle>("");
  const [activeMenu, setActiveMenu] = useState(false);
  const dispatch = useDispatch();

  const dropdownRef = useClickOutside<HTMLDivElement>(() => {
    setActiveMenu(false);
  });

  return (
    <div ref={dropdownRef} className={style.filter}>
      <div
        className={clsx(style.input, { [style.actve]: activeMenu })}
        onClick={() => setActiveMenu(!activeMenu)}
      >
        {inputValue || "Категория..."}
      </div>
      <ul className={clsx(style.menu, { [style.active]: activeMenu })}>
        {filterData.map((item, index) => (
          <li
            onClick={() => {
              dispatch(setFilterValue(item.filterValue));
              setInputValue(item.title);
              setActiveMenu(false);
            }}
            className={style.menu__item}
            key={index}
          >
            {item.title}
          </li>
        ))}
      </ul>
    </div>
  );
};
