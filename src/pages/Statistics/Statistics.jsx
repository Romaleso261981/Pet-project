import { Background } from "../../components/Background/Background";
import { Report } from "../../components/Report/Report";
import styled from "./Statistics.module.scss";

const Statistics = () => {
  return (
    <>
      <Background />
      <div className={styled.container}>
        <div className={styled.wrapper}></div>
        {/* <Report /> */}
      </div>
    </>
  );
};

export default Statistics;
