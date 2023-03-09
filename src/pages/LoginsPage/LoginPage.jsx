import { Container, ContentWrapper } from "./Logins.styled";

// import { AuthForm } from "../../components/AuthForm/AuthForm";
import { FormUser } from "../../components/AuthForm/FormUser/FormUser";
import { AuthPageLogo } from "../../components/AuthPageLogo/AuthPageLogo";
import { getLang } from "../../redux/lang/langSelectors";
import { useSelector } from "react-redux";

const LoginPage = () => {
  const lang = useSelector(getLang).lang;

  return (
    <Container>
      <ContentWrapper>
        <AuthPageLogo />
        <FormUser
          formTitle={lang === "en" ? "Login" : "Логін"}
          btnText={lang === "en" ? "Log in" : "Логін"}
          navLinkText={lang === "en" ? "Register" : "Реєстрація"}
          navLinkAdress="/wallet"
          MainText={
            lang === "en"
              ? "Or log in using an email and password, after registering:"
              : "Або залогіньтесь, використовуючи ваш емейл та пароль, після реєстрації:"
          }
        />
        {/* <AuthForm
          formTitle={lang === "en" ? "Login" : "Логін"}
          btnText={lang === "en" ? "Log in" : "Логін"}
          navLinkText={lang === "en" ? "Register" : "Реєстрація"}
          navLinkAdress="/wallet"
          MainText={
            lang === "en"
              ? "Or log in using an email and password, after registering:"
              : "Або залогіньтесь, використовуючи ваш емейл та пароль, після реєстрації:"
          }
        /> */}
      </ContentWrapper>
    </Container>
  );
};

export default LoginPage;
