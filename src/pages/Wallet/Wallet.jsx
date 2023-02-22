import { Background } from "../../components/Background/Background";
import styled from "./Wallet.module.scss";

const Wallet = () => {
  return (
    <>
      <Background />
      <div className={styled.container}>
        <div className={styled.wrapper}></div>
      </div>
    </>
  );
};

export default Wallet;
