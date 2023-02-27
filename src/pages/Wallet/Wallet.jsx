import { Background } from "../../components/Background/Background";
import { Transactions } from "components/Transactions/Transactions";
import styled from "./Wallet.module.scss";

const Wallet = () => {
  return (
    <>
      <Background />
      <div className={styled.container}>
        <div className={styled.wrapper}>
          <Transactions />
        </div>
      </div>
    </>
  );
};

export default Wallet;
