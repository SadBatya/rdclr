import style from "./Input.module.css";

interface Props {
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input = ({ placeholder, onChange }: Props) => (
  <input
    className={style.input}
    type="text"
    placeholder={placeholder}
    onChange={onChange}
  />
);
