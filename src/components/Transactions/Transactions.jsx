import { TypeTransaction } from "components/BtnChangeTypeTransaction/TypeTransaction";
import TableSummary from "components/TableSummary/TableSummary";
import { TableTransaction } from "components/TableTransaction/TableTransaction";
import { TransactionForm } from "components/TransactionForm/TransactionForm";
import { useState } from "react";
import styled from "./Transactions.module.scss";

export function Transactions() {
  const [typeTransaction, setTypeTransaction] = useState('expenses');

  const today = new Date();
  const yyyy = today.getFullYear();
  let mm = today.getMonth() + 1;
  let dd = today.getDate();
  if (dd < 10) dd = "0" + dd;
  if (mm < 10) mm = "0" + mm;
  let date = {dd, mm, yyyy}
 
  function handleClick(id) {
    if (typeTransaction == id) return
    setTypeTransaction(id);
  }

  return (
    <>
      <TypeTransaction onClick={handleClick}/>
      <div className={styled.transaction_all}>
        <div className={styled.transaction}>
          <TransactionForm transaction={typeTransaction} date={date} />
          <TableTransaction transaction={typeTransaction} date={date} />
        </div>
        <TableSummary className={styled.transaction__summary} transaction={typeTransaction}/>
      </div>
    </>
  );
}
