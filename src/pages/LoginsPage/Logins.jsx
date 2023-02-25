import { Container, ContentWrapper } from "./Logins.styled";

import { AuthForm } from "components/AuthForm/AuthForm";
import { AuthPageLogo } from "components/AuthPageLogo/AuthPageLogo";
// import { getLang } from "redux/lang/langSelectors";
// import { useSelector } from "react-redux";

const LoginPage = () => {
  //   const lang = useSelector(getLang).lang;

  return (
    <Container>
      <ContentWrapper>
        <AuthPageLogo />
        <AuthForm
          formTitle="login"
          btnText={"en" === "en" ? "Log in" : "Логін"}
          navLinkText={"en" === "en" ? "Register" : "Реєстрація"}
          navLinkAdress="/register"
          hintText={
            "en" === "en"
              ? "Or log in using an email and password, after registering:"
              : "Або залогіньтесь, використовуючи ваш емейл та пароль, після реєстрації:"
          }
        />
      </ContentWrapper>
    </Container>
  );
};

export default LoginPage;