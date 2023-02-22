import styled from "./ButtonIC.module.scss";

export function ButtonIC() {
    return (
        <div className={styled.wrapper} >
            <button 
                type="submit"
                id="submit"
                className={styled.button}
            >
                input
            </button>
            <button
                type="reset"
                id="reset"
                className={styled.button}
                >
                clear
            </button>
        </div>
    )
}