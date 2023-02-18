import { Container } from '../Container/Container';
import google from '../../assets/image/google.png';
import styled from './FormAuth.module.scss';

export const FormAuth = () => {
  return (
    <Container>
      <section className={styled.auth}>
        <div className={styled.google__auth}>
          <p className={styled.google__auth_title}>You can log in with your Google Account:</p>
          <button
            className={styled.google__auth_btn}
            type="button"
          >
            <img
              src={google}
              alt="google"
              className={styled.google__auth_btn_img}
            />
            <span className={styled.google__auth_btn_title}>Google</span>
          </button>
        </div>
        <div className={styled.form__wrapper}>
          <p className={styled.form__wrapper_text}>Or log in using an email and password, after registering: </p>
          <form className={styled.form__auth}>
            <label
              htmlFor="email"
              className={styled.form__auth_label}
            >
              Email:
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
              Password:
            </label>
            <input
              className={styled.form__auth_input}
              type="password"
              placeholder="Password"
            />

            <ul className={styled.list__button}>
              <li className={styled.list__button_item}>
                <button
                  className={styled.form__auth_submit}
                  type="submit"
                >
                  LOG IN
                </button>
              </li>
              <li className={styled.list__button_item}>
                <button
                  className={styled.form__auth_signup}
                  type="button"
                >
                  REGISTRATION
                </button>
              </li>
            </ul>
          </form>
        </div>
      </section>
    </Container>
  );
};
