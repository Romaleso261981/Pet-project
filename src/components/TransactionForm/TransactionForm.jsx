import { Formik, Form, Field } from "formik";
import { 
    WrapperForm, 
    DivInputsAndBtn,
    DivProduct,
    DivInputs 
} from './TransactionForm.styled';
import { InputProductDescription } from './InputProductDescription/InputProductDescription';
import { SelectProducts } from './SelectProducts/SelectProducts';
import { Calc } from './Calc/Calc';
import { ButtonIC } from './Button/Button';
import { GoBack } from "./GoBack/GoBack";
import { CurrentDate } from "./CurrentDate/CurrentDate";
import { addTransaction } from "services/transactionAPI";

export function TransactionForm({transaction, date, updateTable}) {
    
    const handleSubmit = async (values, {resetForm}) => {
        await addTransaction(values);
        updateTable()
        resetForm();
    };

    return (
        <>
            <div>
                <GoBack />
                <WrapperForm>
                    <Formik
                        onSubmit={handleSubmit}
                        initialValues={{ transaction: transaction, date: date, productDescription: '', selectProduct: '', culc: '' }}
                    >
                        <Form>
                            <DivInputsAndBtn>
                                <DivInputs>
                                    <CurrentDate date={date}></CurrentDate>
                                    <DivProduct>
                                        <Field name="productDescription" component={InputProductDescription} />
                                        <Field name="selectProduct" component={SelectProducts} />
                                    </DivProduct>
                                    <Field name="culc" component={Calc} />
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