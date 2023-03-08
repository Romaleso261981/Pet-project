import styled from "./Wallet.module.scss";

import { Transactions } from "../../components/Transactions/Transactions";
const Wallet = () => {
  return (
    <>
      <div className={styled.container}>
        <div className={styled.wrapper}>
          <div className={styled.transaction_all}>
            <div className={styled.BtnsWrapper}></div>
            <Transactions />
          </div>
        </div>
      </div>
    </>
  );
};
export default Wallet;
