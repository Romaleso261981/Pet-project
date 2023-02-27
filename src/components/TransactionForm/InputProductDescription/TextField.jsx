import { useState } from 'react';
import TextField from '@mui/material/TextField';
import styled from "./InputProductDescription.module.scss";

export function Input() {
    const [productDescription, setProductDescription] = useState([]);

    const handleChange = (event) => {
        setProductDescription(event.target.value);
    };

    return (
        <TextField
            className={styled.product_description}
            name='productDescription'
            value={productDescription}
            onChange={handleChange}
            placeholder="Product description"
        />
    )
}