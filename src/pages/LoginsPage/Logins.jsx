import { Container, ContentWrapper } from './Logins.styled';

import { AuthForm } from 'components/AuthForm/AuthForm';
import { AnimatedCabbagesBg } from 'components/AnimatedBg/AnimatedBg';
import { AnimatedBottomCabbages } from 'components/AnimatedCabbagesBottom/AnimatedCabbagesBottom';
import { AuthPageLogo } from 'components/AuthPageLogo/AuthPageLogo';
import { getLang } from 'redux/lang/langSelectors';
import { useSelector } from 'react-redux';

const LoginPage = () => {
  const lang = useSelector(getLang).lang;

  return (
    <Container>
      <AnimatedCabbagesBg />
      <ContentWrapper>
        <AuthPageLogo />

        <AuthForm
          formTitle="login"
          btnText={lang === 'en' ? 'Log in' : 'Логін'}
          navLinkText={lang === 'en' ? 'Register' : 'Реєстрація'}
          navLinkAdress="/register"
          hintText={
            lang === 'en'
              ? 'Or log in using an email and password, after registering:'
              : 'Або залогіньтесь, використовуючи ваш емейл та пароль, після реєстрації:'
          }
        />
      </ContentWrapper>
      <AnimatedBottomCabbages />
    </Container>
  );
};

export default LoginPage;
