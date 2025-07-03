import type { ReactNode, MouseEvent } from "react";
import style from "./Button.module.css";
import clsx from "clsx";

interface Props {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
  active?: boolean;
}

export const Button = ({ children, onClick, className, active }: Props) => (
  <button
    onClick={(e: MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      onClick?.();
    }}
    className={clsx(style.button, className, { [style.active]: active })}
  >
    {children}
  </button>
);
