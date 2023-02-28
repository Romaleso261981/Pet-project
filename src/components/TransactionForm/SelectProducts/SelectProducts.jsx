import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
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

export function SelectProducts ({ form, field }) {
    const { name, value } = field;
    const { setFieldValue } = form;
  
    return (
        <Select
            required
            className={styled.select_product}
            displayEmpty
            renderValue={(selected) => {
                if (selected.length === 0) {
                    return ('Product category');
                }
                
                return selected;
            }}
            name={name}
            value={value}
            onChange={e => {
                setFieldValue(name, e.target.value);
            }}
        >
            {productCategory.map((name) => (
                <MenuItem
                    sx={{fontSize: '12px', bgcolor: '#F5F6FB', color: '#C7CCDC'}}
                    key={name}
                    value={name}
                >
                    {name}
                </MenuItem>
            ))}
        </Select>
    );
};