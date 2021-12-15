import React from "react";
import s from "./Button.module.css";

function Button({ onBtnClick }) {
  return (
    <button className={s.Button} onClick={onBtnClick}>
      Load more
    </button>
  );
}
export default Button;
