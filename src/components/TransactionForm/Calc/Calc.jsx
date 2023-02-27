import TextField from '@mui/material/TextField';
import { FaCalculator } from "react-icons/fa";
import styled from "./Calc.module.scss";

export function Calc({ form, field }) {
    const { name, value } = field;
    const { setFieldValue } = form;

    const handleChange = (e) => {
        setFieldValue(name, e.target.value);
    };

    return (
        <div className={styled.wrapper}>
            <div className={styled.wrapper__input}>
                <TextField
                    required
                    name={name}
                    value={value}
                    onChange={handleChange}
                    placeholder="00.00 UAH"
                    inputProps={{
                        pattern: "^[1-9]*[.]?[0-9]{1,2}$"
                    }}
                />
            </div>
            <div className={styled.wrapper__icon}>
                <FaCalculator />
            </div>
        </div>
    )
}