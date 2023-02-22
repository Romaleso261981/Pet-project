import { Formik } from "formik";
import { Form } from 'formik';
import { 
    WrapperForm, 
    DivInputsAndBtn,
    DivProduct,
    DivInputs 
} from './Transaction.styled';
import { InputProductDescription } from './InputProductDescription/InputProductDescription';
import { SelectProducts } from './SelectProducts/SelectProducts';
import { Calc } from './Calc/Calc';
import { ButtonIC } from './Button/Button';
import { GoBack } from "./GoBack/GoBack";
import { Data } from "./Data/Data";

export function Transaction() {
    
    const handleSubmitQw = (e) => {
        console.log(e.target)
    };

    const handleSubmit = (e) => {
        console.log(e.target)
    };

    return (
        <>
            <div>
                <GoBack />

                <WrapperForm>
                    <Formik
                        onSubmit={data => console.log(data)}
                        initialValues={{ date: '', productDescription: '', selectProduct: '', culc: '' }}
                    >
                        <Form>
                            <DivInputsAndBtn>
                                <DivInputs>
                                    <Data />
                                    <DivProduct>
                                        <InputProductDescription />
                                        <SelectProducts />
                                    </DivProduct>
                                    <Calc />
                                </DivInputs>
                                <ButtonIC />
                            </DivInputsAndBtn>
                        </Form>
                    </Formik>
                </WrapperForm>
            </div>
        </>
  );
}