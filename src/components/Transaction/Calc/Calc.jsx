import TextField from '@mui/material/TextField';
import { FaCalculator } from "react-icons/fa";
import { Field } from 'formik';
import { 
    DivCalc,
    DivCalcInput,
    DivCalcIcon
} from './Calc.styled';
import { useState } from 'react';

export function CalcSt() {
    const [culc, setCulc] = useState([]);

    const handleChange = (event) => {
        setCulc(event.target.value);
    };

    return (
        <DivCalc>
        <DivCalcInput>
            <Field
                value={culc}
                onChange={handleChange}
                name='calc'
                component={TextField} 
                placeholder="00.00 UAH"
                pattern="\d+(\.\d{1-2})?"
            />
        </DivCalcInput>
        <DivCalcIcon>
            <FaCalculator />
        </DivCalcIcon>
    </DivCalc>
    )
}