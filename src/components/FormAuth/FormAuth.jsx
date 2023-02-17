import { Container } from '../Container/Container';
import styled from './FormAuth.module.scss';

export const FormAuth = () => {
  return (
    <Container>
      <section className={styled.auth}>
        <div className={styled.google__auth}>
          <p className={styled.google__auth_title}>Ви можете авторизоватись за допомогою Google Account:</p>
          <button
            className={styled.google__auth_btn}
            type="button"
          >
            Google
          </button>
        </div>
        <div className={styled.form__wrapper}>
          <p className={styled.form__wrapper_text}>
            Або зайти за допомогою e-mail и пароля, попередньо зареєструвавшись:
          </p>
          <form className={styled.form__auth}>
            <label
              htmlFor="email"
              className={styled.form__auth_label}
            >
              Электронна пошта:
            </label>
            <input
              className={styled.form__auth_input}
              type="email"
              placeholder="your@mail.com"
              id="email"
            />
            <label
              htmlFor="email"
              className={styled.form__auth_label}
            >
              Пароль:
            </label>
            <input
              className={styled.form__auth_input}
              type="password"
              placeholder="Пароль"
            />

            <ul className={styled.list__button}>
              <li className={styled.list__button_item}>
                <button
                  className={styled.form__auth_submit}
                  type="submit"
                >
                  Ввіти
                </button>
              </li>
              <li className={styled.list__button_item}>
                <button
                  className={styled.form__auth_signup}
                  type="button"
                >
                  Реєстрация
                </button>
              </li>
            </ul>
          </form>
        </div>
      </section>
    </Container>
  );
};
