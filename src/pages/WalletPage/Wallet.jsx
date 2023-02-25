import { Transaction } from "components/Transaction/Transaction";
import TableTransaction from "components/TableTransaction/TableTransaction";
import Balance from "components/Balance/Balance";
import TableSummary from "components/TableSummary/TableSummary";
import styled from "./Wallet.module.scss";

const Wallet = () => {
  return (
    <>
      <div className={styled.container}>
        <Balance />
        <div className={styled.wrapper}>
          <div className={styled.transaction_all}>
            <div className={styled.transaction}>
              <Transaction />
              <TableTransaction />
            </div>
            <TableSummary className={styled.transaction__summary} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Wallet;
