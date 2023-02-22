import { FaCalendarAlt } from "react-icons/fa";
import { Field } from "formik";
import styled from "./Data.module.scss";


export function Data() {
    const today = new Date();
    const yyyy = today.getFullYear();
    let mm = today.getMonth() + 1; // Months start at 0!
    let dd = today.getDate();
    if (dd < 10) dd = '0' + dd;
    if (mm < 10) mm = '0' + mm;
    
    return (
        <div className={styled.wrapper}>
            <FaCalendarAlt />
            <p>{dd + '.' + mm + '.' + yyyy}</p>
            <div>
                <Field className={styled.input} type='text' name='date' value={dd + '.' + mm + '.' + yyyy}/>
            </div>
        </div>
    )
}