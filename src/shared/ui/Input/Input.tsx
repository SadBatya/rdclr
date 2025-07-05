import style from "./Input.module.css";

interface Props {
  placeholder: string;
  inputValue?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  readOnly?: boolean;
  onClick?: () => void;
}

export const Input = ({
  placeholder,
  inputValue,
  onChange,
  readOnly,
  onClick,
}: Props) => (
  <input
    onClick={onClick}
    className={style.input}
    type="text"
    value={inputValue}
    readOnly={readOnly}
    placeholder={placeholder}
    onChange={onChange}
  />
);
