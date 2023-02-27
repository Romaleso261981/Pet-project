import { Formik, Form, Field } from "formik";
import { InputProductDescription } from './InputProductDescription/InputProductDescription';
import { SelectProducts } from './SelectProducts/SelectProducts';
import { Calc } from './Calc/Calc';
import { ButtonIC } from './Button/Button';
import { GoBack } from "./GoBack/GoBack";
import { CurrentDate } from "./CurrentDate/CurrentDate";
import { addTransaction } from "services/transactionAPI";
import styled from "./TransactionForm.module.scss";

export function TransactionForm({transaction, date}) {
    
    const handleSubmit = async (values, {resetForm}) => {
        await addTransaction(values);
        resetForm();
    };

    return (
        <>
            <div>
                {/* <GoBack /> */}
                <div className={styled.wrapper}>
                    <Formik
                        onSubmit={handleSubmit}
                        initialValues={{ transaction: transaction, date: date, productDescription: '', selectProduct: '', culc: ''}}
                    >
                        <Form>
                            <div className={styled.inputsAndBtn}>
                                <div className={styled.inputs}>
                                    <CurrentDate date={date}></CurrentDate>
                                    <div className={styled.product}>
                                        <Field name="productDescription" component={InputProductDescription} />
                                        <Field name="selectProduct" component={SelectProducts} />
                                    </div>
                                    <Field name="culc" component={Calc} />
                                </div>
                                <ButtonIC />
                            </div>
                        </Form>
                    </Formik>
                </div>
            </div>
        </>
  );
}