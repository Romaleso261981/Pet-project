import { Background } from "../../components/Background/Background";
import { MainTitle } from "../../components/MainTitle/MainTitle";
import { FormWrapper } from "../../components/FormWrapper/FormWrapper";
import styled from "./Home.module.scss";

const Home = () => {
  return (
    <>
      <Background />
      <div className={styled.container}>
        <div className={styled.wrapper}>
          <MainTitle />
          <FormWrapper />
        </div>
      </div>
    </>
  );
};

export default Home;
