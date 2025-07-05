import style from "./Input.module.css";

interface Props {
  placeholder: string;
}

export const Input = ({ placeholder }: Props) => (
  <input className={style.input} type="text" placeholder={placeholder} />
);
