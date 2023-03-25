import { useDispatch } from "react-redux";
import { useState } from "react";
import { logIn, Register } from "../../redux/auth/operations";

import { NavLink } from "../NavLink/NavLink";
import { Btn } from "../Buttons/Btn";

import {
  Input,
  Label,
  BtnsWrapper,
  FormWrapper,
  InputWrapper,
  Form,
  InputsWrapper,
  HintLeft,
  PasswordBtn,
  PasswordIcon,
} from "./AuthForm.styled";

export const AuthForm = ({
  formTitle,
  btnText,
  navLinkText,
  navLinkAdress,
  hintText,
}) => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordShown, setIsPasswordShown] = useState(false);

  const handleShowPassword = () => {
    setIsPasswordShown(!isPasswordShown);
  };

  const onInputChange = (event) => {
    switch (event.target.name) {
      case "email":
        setEmail(event.target.value);
        break;
      case "password":
        setPassword(event.target.value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formTitle === "login") {
      dispatch(logIn({ email, password }));
    } else {
      dispatch(Register({ email, password }));
    }
    resetForm();
  };

  const resetForm = () => {
    setEmail("");
    setPassword("");
  };

  return (
    <FormWrapper>
      <Form onSubmit={handleSubmit}>
        <HintLeft>{hintText}</HintLeft>
        <InputsWrapper>
          <InputWrapper>
            <Label htmlFor="auth-email">
              <span>Email</span>
            </Label>
            <Input
              type="email"
              id="auth-email"
              name="email"
              value={email}
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
              placeholder="your@email.com"
              onChange={onInputChange}
              onInvalid={(e) => {
                setError(true);
              }}
            />
          </InputWrapper>
          <InputWrapper>
            <Label htmlFor="auth-password">
              <span>Password</span>
            </Label>
            <Input
              type="password"
              id="auth-password"
              name="password"
              value={password}
              minLength="8"
              placeholder="Password"
              onChange={onInputChange}
              onInvalid={(e) => {
                setError(true);
              }}
            />
            <PasswordBtn onClick={handleShowPassword} type="button">
              <PasswordIcon
                src=""
                alt="Button show/hide password"
              />
            </PasswordBtn>
          </InputWrapper>
        </InputsWrapper>
        <BtnsWrapper>
          <Btn type="submit" text={btnText} />
          <NavLink text={navLinkText} to={navLinkAdress} />
        </BtnsWrapper>
      </Form>
    </FormWrapper>
  );
};
