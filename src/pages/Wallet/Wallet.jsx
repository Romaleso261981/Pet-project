import { Transactions } from "components/Transactions/Transactions";
import { TableTransaction } from "components/TableTransaction/TableTransaction";
import Balance from "../../components/Balance/Balance";
import styled from "./Wallet.module.scss";

const Wallet = () => {
  return (
    <>
      <div className={styled.container}>
        <Balance />
        <div className={styled.wrapper}>
          <Transactions />
          <TableTransaction />
        </div>
      </div>
    </>
  );
};

export default Wallet;
