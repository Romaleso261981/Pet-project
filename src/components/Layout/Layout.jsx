import { Outlet } from "react-router-dom";
import { Header } from "../Header/Header";
<<<<<<< Updated upstream
import { FormAuth } from "../FormAuth/FormAuth";
=======
import { Container } from "../Container/Container";
>>>>>>> Stashed changes
import styled from "./Layout.module.scss";
import { Container } from "components/Container";


export const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <Container>
          <div className={styled.hero}>
            <div>
              <h1 className={styled.hero__title}>Kapu$ta</h1>
              <p className={styled.hero__text}>Smart Finance</p>
            </div>
          </div>
          <FormAuth />
          <Outlet />
        </Container>

      </main>
    </>
  );
};
