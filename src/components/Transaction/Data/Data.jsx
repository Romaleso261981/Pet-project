import { FaCalendarAlt } from "react-icons/fa";
import { DivInput, Input, Wrapper } from "./Data.styled";

export function Data() {
    const today = new Date();
    const yyyy = today.getFullYear();
    let mm = today.getMonth() + 1; // Months start at 0!
    let dd = today.getDate();
    if (dd < 10) dd = '0' + dd;
    if (mm < 10) mm = '0' + mm;
    
    return (
        <Wrapper>
            <FaCalendarAlt />
            <p>{dd + '.' + mm + '.' + yyyy}</p>
            <DivInput>
                <Input type='text' name='date' value={dd + '.' + mm + '.' + yyyy}/>
            </DivInput>
        </Wrapper>
    )
}