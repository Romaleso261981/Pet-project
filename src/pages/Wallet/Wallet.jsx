import { Background } from "../../components/Background/Background";
import { Transaction } from "components/Transaction/Transaction";
import TableTransaction from "components/TableTransaction/TableTransaction";
import TableSummary from "components/TableSummary/TableSummary";
import styled from "./Wallet.module.scss";

const Wallet = () => {
  return (
    <>    
      <Background />
      <div className={styled.container}>
        <div className={styled.wrapper}>
          <div className={styled.transaction_all}>
            <div className={styled.transaction}>
              <Transaction />
              <TableTransaction />
            </div >
            <TableSummary className={styled.transaction__summary}/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Wallet;
