import styled from "./TypeTransaction.module.scss";

export function TypeTransaction({onClick}) {

    function handlClicks(e) {
        const id = e.target.id;
        onClick(id)
    }

  return (
    <>
        <div className={styled.wrapper} >
            <button 
                type="button"
                id="expenses"
                className={styled.button}
                onClick={handlClicks}
            >
                Expenses
            </button>
            <button
                type="button"
                id="income"
                className={styled.button}
                onClick={handlClicks}
            >
                Income
            </button>
        </div>
    </>
  );
}
