import { Container } from "../Container/Container";
import logo from "../../assets/image/logo.svg";
import styled from "./Header.module.scss";
export const Header = () => {
  return (
    <header>
      <Container>
        <div className={styled.header}>
          <img src={logo} alt="Logo" />
        </div>
      </Container>
    </header>
  );
};
