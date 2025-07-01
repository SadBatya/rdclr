import { Link } from "react-router";
import type { ReactNode } from "react";
import styles from "./CustomLink.module.css";

interface Props {
  to: string;
  children: ReactNode;
}

export const CustomLink = ({ to, children }: Props) => (
  <Link to={to} className={styles.link}>
    {children}
  </Link>
);
