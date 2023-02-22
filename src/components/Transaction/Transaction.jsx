import { Formik } from "formik";
import { Form } from 'formik';
import { 
    GreyWrapper, 
    WrapperForm, 
    DivInputsAndBtn,
    DivProduct,
    DivInputs 
} from './Transaction.styled';
import { InputProductDescriptionSt } from './InputProductDescription/InputProductDescription';
import { SelectProductsSt } from './SelectProducts/SelectProducts';
import { CalcSt } from './Calc/Calc';
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
            <GreyWrapper></GreyWrapper>
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
                                        <InputProductDescriptionSt />
                                        <SelectProductsSt />
                                    </DivProduct>
                                    <CalcSt />
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