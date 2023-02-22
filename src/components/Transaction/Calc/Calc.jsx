import { useState } from 'react';
import { Field } from 'formik';
import TextField from '@mui/material/TextField';
import { FaCalculator } from "react-icons/fa";
import styled from "./Calc.module.scss";

export function Calc() {
    const [culc, setCulc] = useState([]);

    const handleChange = (event) => {
        setCulc(event.target.value);
    };

    return (
        <div className={styled.wrapper}>
            <div className={styled.wrapper__input}>
                <Field
                    value={culc}
                    onChange={handleChange}
                    name='calc'
                    component={TextField} 
                    placeholder="00.00 UAH"
                    pattern="\d+(\.\d{1-2})?"
                />
            </div>
            <div className={styled.wrapper__icon}>
                <FaCalculator />
            </div>
        </div>
    )
}