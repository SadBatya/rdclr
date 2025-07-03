import style from "./Loading.module.css";

export const Loading = () => (
  <div className={style.loading}>
    <span className={style.dote} />
    <span className={style.dote} />
    <span className={style.dote} />
  </div>
);
