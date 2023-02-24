import { FaCalendarAlt } from "react-icons/fa";
import styled from "./CurrentDate.module.scss";


export function CurrentDate({children}) {
    return (
        <div className={styled.wrapper}>
            <FaCalendarAlt />
            <p>{children}</p>
        </div>
    )
}