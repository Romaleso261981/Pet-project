import { useState } from 'react';
import { Field } from 'formik';
import { 
    DivProductDescription, 
    ProductDescription,
} from './InputProductDescription.styled';
import { TextField } from './TextField';


export function InputProductDescriptionSt() {
    // const [productDescription, setProductDescription] = useState([]);

    // const handleChange = (event) => {
    //     setProductDescription(event.target.value);
    // };
    
    return (
        <DivProductDescription>
            <Field 
                // value={productDescription}
                // onChange={handleChange}
                name='productDescription'
                component={TextField}
                // placeholder="Product description"
            />
        </DivProductDescription>
    )
}