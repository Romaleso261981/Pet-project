import { Background } from "../../components/Background/Background";
import styled from "./Statistics.module.scss";
import { CurrentMonth } from "../../components/Report/CurrentMonth";
const Statistics = () => {
  return (
    <>
      <Background />
      <div className={styled.container}>
        <div className={styled.wrapper}></div>
        <CurrentMonth />
      </div>
    </>
  );
};

export default Statistics;
