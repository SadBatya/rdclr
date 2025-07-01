import type { ReactNode } from "react";
import style from "./Button.module.css";
import clsx from "clsx";

interface Props {
  children: ReactNode;
  onClick: () => void;
  className?: string;
}

export const Button = ({ children, onClick, className }: Props) => (
  <button onClick={onClick} className={clsx(style.button, className)}>
    {children}
  </button>
);
