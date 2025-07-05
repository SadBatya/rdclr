import { Input } from "@/shared/ui/Input/Input";
import { useState, useRef } from "react";
import style from "./Filter.module.css";
import clsx from "clsx";
import { useClickOutside } from "@/shared/hooks/useClickOutside";
import { filterData } from "@/shared/ui/Filter/model/data";

export const Filter = () => {
  const [inputValue, setInputValue] = useState("");
  const [activeMenu, setActiveMenu] = useState(false);

  const ref = useRef<HTMLDivElement>(null);

  useClickOutside(ref, () => setActiveMenu(false));

  return (
    <div ref={ref} className={style.filter}>
      <div
        className={clsx(style.input, { [style.actve]: activeMenu })}
        onClick={() => setActiveMenu(!activeMenu)}
      >
        {inputValue || "Категория..."}
      </div>
      <ul className={clsx(style.menu, { [style.active]: activeMenu })}>
        {filterData.map((item, index) => (
          <li
            onClick={() => setInputValue(item.title)}
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
