import { Link } from "react-router";
import type { ReactNode } from "react";
import styles from "./CustomLink.module.css";
import clsx from "clsx";

interface Props {
  to: string;
  children: ReactNode;
  className?: string;
}

export const CustomLink = ({ to, children, className }: Props) => (
  <Link to={to} className={clsx(styles.link, className)}>
    {children}
  </Link>
);
