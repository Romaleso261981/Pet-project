import { useState } from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import { Field } from 'formik';
import {
    SelectDiv,
    SelectProduct,
} from './SelectProducts.styled';

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

export function SelectProductsSt() {
    const [product, setProduct] = useState([]);

    const handleChange = (event) => {
        setProduct(event.target.value);
    };
    
    return (
        <SelectDiv>
            <SelectProduct
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
                        sx={{bgcolor: '#F5F6FB', color: '#C7CCDC'}}
                        key={name}
                        value={name}
                    >
                    {name}
                    </MenuItem>
                ))}
            </SelectProduct>
        </SelectDiv>
    )
}