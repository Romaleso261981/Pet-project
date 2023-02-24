import { Formik, Form, Field } from "formik";
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
import { CurrentDate } from "./CurrentDate/CurrentDate";

export function Transaction() {
    const today = new Date();
    const yyyy = today.getFullYear();
    let mm = today.getMonth() + 1;
    let dd = today.getDate();
    if (dd < 10) dd = '0' + dd;
    if (mm < 10) mm = '0' + mm;
    let date = `${dd + '.' + mm + '.' + yyyy}`


    const handleSubmit = (values) => {
        console.log(values)
    };

    return (
        <>
            <div>
                <GoBack />
                <WrapperForm>
                    <Formik
                        onSubmit={handleSubmit}
                        initialValues={{ date: date, productDescription: '', selectProduct: '', culc: '' }}
                    >
                        <Form>
                            <DivInputsAndBtn>
                                <DivInputs>
                                    <CurrentDate>{date}</CurrentDate>
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