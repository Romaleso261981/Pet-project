import { Background } from "../../components/Background/Background";
import { Balance } from "../../components/Balance/Balance";
import TableSummary from "../../components/TableSummary/TableSummary";
import styled from "./Wallet.module.scss";

const Wallet = () => {
  return (
    <>
      <Background />
      <div className={styled.container}>
        <Balance />
        <div className={styled.wrapper}>
          <TableSummary />
        </div>
      </div>
    </>
  );
};

export default Wallet;
