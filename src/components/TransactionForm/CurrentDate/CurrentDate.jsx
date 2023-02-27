import { FaCalendarAlt } from "react-icons/fa";
import styled from "./CurrentDate.module.scss";


export function CurrentDate({date}) {
    return (
        <div className={styled.wrapper}>
            <FaCalendarAlt />
            <p>{date.dd}.{date.mm}.{date.yyyy}</p>
        </div>
    )
}