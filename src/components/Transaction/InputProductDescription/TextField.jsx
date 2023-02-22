import { useState } from 'react';
import { 
    ProductDescription,
} from './InputProductDescription.styled';

export function TextField() {
    const [productDescription, setProductDescription] = useState([]);

    const handleChange = (event) => {
        setProductDescription(event.target.value);
    };

    return (
        <ProductDescription 
            name='productDescription'
            value={productDescription}
            onChange={handleChange}
            placeholder="Product description"
        />
    )
}