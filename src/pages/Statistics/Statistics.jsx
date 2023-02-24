import { Background } from "../../components/Background/Background";
import styled from "./Statistics.module.scss";
const Statistics = () => {
  return (
    <>
      <Background />
      <div className={styled.container}>
        <div className={styled.wrapper}></div>
      </div>
    </>
  );
};

export default Statistics;
