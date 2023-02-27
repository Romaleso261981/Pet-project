import TableSummary from "components/TableSummary/TableSummary";
import { TableTransaction } from "components/TableTransaction/TableTransaction";
import { TransactionForm } from "components/TransactionForm/TransactionForm";
import { forceUpdate } from "react";
import styled from "./Transactions.module.scss";

export function Transactions() {
  const today = new Date();
  const yyyy = today.getFullYear();
  let mm = today.getMonth() + 1;
  let dd = today.getDate();
  if (dd < 10) dd = "0" + dd;
  if (mm < 10) mm = "0" + mm;
  let date = { dd, mm, yyyy };
  let transaction = "expenses";

  function updateTable() {}

  return (
    <>
      <div className={styled.transaction_all}>
        <div className={styled.transaction}>
          <TransactionForm
            transaction={transaction}
            date={date}
            updateTable={() => updateTable()}
          />
          <TableTransaction transaction={transaction} date={date} />
        </div>
        <TableSummary className={styled.transaction__summary} />
      </div>
    </>
  );
}
