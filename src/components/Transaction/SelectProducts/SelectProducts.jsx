import { useState } from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { Field } from 'formik';
import styled from "./SelectProduct.module.scss";

const productCategory = [
    'Transport',
    'Products',
    'Alcohol',
    'Entertainment',
    'Housing',
    'Technique',
    'Communal, communication',
    'Sports, hobbies',
    'Education',
    'Other',
];

export function SelectProducts() {
    const [product, setProduct] = useState([]);

    const handleChange = (event) => {
        setProduct(event.target.value);
    };
    
    return (
        <div className={styled.wrapper}>
            <Select
                className={styled.select_product}
                id='select-product'
                displayEmpty
                value={product}
                onChange={handleChange}
                input={<Field 
                    component={OutlinedInput}
                    name='selectProduct'
                />}
                renderValue={(selected) => {
                    if (selected.length === 0) {
                        return ('Product category');
                    }
                    
                    return selected;
                }}
            >
                
                {productCategory.map((name) => (
                    <MenuItem
                        className={styled.products}
                        sx={{bgcolor: '#F5F6FB', color: '#C7CCDC'}}
                        key={name}
                        value={name}
                    >
                    {name}
                    </MenuItem>
                ))}
            </Select>
        </div>
    )
}