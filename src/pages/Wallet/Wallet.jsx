import { Transactions } from "components/Transactions/Transactions";
import Balance from "../../components/Balance/Balance";
import styled from "./Wallet.module.scss";

const Wallet = () => {
  return (
    <>
      <div className={styled.container}>
        <Balance />
        <div className={styled.wrapper}>
          <Transactions />
        </div>
      </div>
    </>
  );
};

export default Wallet;
