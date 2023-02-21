import { Container } from "../Container/Container";
import logo from "../../assets/image/logo.svg";
import styled from "./Header.module.scss";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "redux/auth/selectors";
import UserMenu from "../UserMenu/UserMenu";

export const Header = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <header>
      <Container>
        <div className={styled.header}>
          <button className={styled.header__logo} type="button">
            <img src={logo} alt="Logo" />
          </button>
        </div>
        {isLoggedIn && <UserMenu />}
      </Container>
    </header>
  );
};
