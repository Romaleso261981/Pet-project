import { Transaction } from "components/Transaction/Transaction";
import TableTransaction from "components/TableTransaction/TableTransaction";
import TableSummary from "components/TableSummary/TableSummary";
import { AnimatedCabbagesBg } from "../../components/AnimatedBg/AnimatedBg";
import { AnimatedBottomCabbages } from "../../components/AnimatedCabbagesBottom/AnimatedCabbagesBottom";
import styled from "./Wallet.module.scss";

const Wallet = () => {
  return (
    <>
      <AnimatedCabbagesBg />
      <AnimatedBottomCabbages />
      <div className={styled.container}>
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
