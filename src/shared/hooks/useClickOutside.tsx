import { useEffect, type RefObject } from "react";

export const useClickOutside = (
  ref: RefObject<HTMLElement> | RefObject<HTMLDivElement> | null,
  onClickOutside: () => void
) => {
  useEffect(() => {
    if (!ref) return;
    const handleClick = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        onClickOutside();
      }
    };

    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [ref, onClickOutside]);
};
