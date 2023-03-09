import styled from "./TypeTransaction.module.scss";
import { useNavigate } from "react-router-dom";

export function TypeTransaction({ onClick }) {
  const navigate = useNavigate();

  function handlClicks(e) {
    const id = e.target.id;
    onClick(id);
  }
  function goTo() {
    navigate("/");
  }

  return (
    <>
      <div className={styled.wrapper}>
        <button type="button" className={styled.button} onClick={goTo}>
          Добавити
        </button>
        <button
          type="button"
          id="done"
          className={styled.button}
          onClick={handlClicks}
        >
          Зробленні
        </button>
        <button
          type="button"
          id="inWork"
          className={styled.button}
          onClick={handlClicks}
        >
          В роботу
        </button>
      </div>
    </>
  );
}
