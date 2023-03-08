import { TypeTransaction } from "../../components/BtnChangeTypeTransaction/TypeTransaction";
import TableSummary from "../../components/TableSummary/TableSummary";
import { TableTransaction } from "../../components/TableTransaction/TableTransaction";
import { TransactionForm } from "../../components/TransactionForm/TransactionForm";
import { useState } from "react";
import styled from "./Transactions.module.scss";

export function Transactions() {
  const [typeTransaction, setTypeTransaction] = useState('inWork');
  const [needUpdate, setNeedUpdate] = useState(0);

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

  function updateData (value) {
    if (value) setNeedUpdate(needUpdate^1)
  }

  return (
    <>
      <TypeTransaction onClick={handleClick}/>
      <div className={styled.transaction_all}>
      
        <div className={styled.transaction}>
          <TableTransaction
            transaction={typeTransaction}
            date={date}
            updateData={updateData}
            needUpdate={needUpdate}
          />
         </div>
      </div>
    </>
  );
}
