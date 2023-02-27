import TextField from '@mui/material/TextField';
import styled from "./InputProductDescription.module.scss";

export function InputProductDescription({ form, field }) {
    const { name, value } = field;
    const { setFieldValue } = form;

    const handleChange = (e) => {
        setFieldValue(name, e.target.value);
    };

    return (
        <div className={styled.wrapper}>
            <TextField
                required
                className={styled.product_description}
                name={name}
                value={value}
                onChange={handleChange}
                placeholder="Product description"
            />
        </div>
    )
}