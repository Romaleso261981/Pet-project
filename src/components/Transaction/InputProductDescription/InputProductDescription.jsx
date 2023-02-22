import { Field } from 'formik';
import styled from "./InputProductDescription.module.scss";
import { Input } from './TextField';


export function InputProductDescription() {
    return (
        <div className={styled.wrapper}>
            <Field 
                name='productDescription'
                component={Input}
            />
        </div>
    )
}