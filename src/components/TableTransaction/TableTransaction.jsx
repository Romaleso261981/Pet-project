import { useEffect, useState } from "react";
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import { IoTrashOutline } from "react-icons/io5";
import styled from "./TableTransaction.module.scss";
import { deleteTransaction, fetchData } from "services/transactionAPI";

const headers = ["date", "description", "category", "sum", ""];

export function TableTransaction({ transaction, date }) {
  const [transactionList, setTransactionList] = useState([]);
  
  useEffect(() => {
    async function getTransactionForMonth({ transaction, date }) {
      try {
        const data = await fetchData({ transaction, date });
        const necessaryData = data
          .map(({ _id, date, description, category, amount }) => ({
            _id,
            date: new Date(date),
            description,
            category,
            amount,
          }))
          .reverse();
        setTransactionList(necessaryData);
      } catch (error) {
        console.log(error);
      }
    }
    getTransactionForMonth({transaction, date})
  });

  async function onDelete(_id) {
    await deleteTransaction(_id);
  }

  return (
    <TableContainer className={styled.wrapper}>
      <Table size="small" className={styled.table}>
        <TableHead className={styled.table__head}>
          <TableRow>
            {headers.map((header) => (
              <TableCell key={header} component="th" scope="row">
                {header}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {transactionList.map(
            ({ _id, date, description, category, amount }) => (
              <TableRow key={_id}>
                <TableCell component="th" scope="row">
                  {date.toLocaleDateString()}
                </TableCell>
                <TableCell>{description}</TableCell>
                <TableCell>{category}</TableCell>
                <TableCell>- {amount}</TableCell>
                <TableCell>
                  <button
                    type="button"
                    className={styled.trash}
                    onClick={() => onDelete(_id)}
                  >
                    <IoTrashOutline />
                  </button>
                </TableCell>
              </TableRow>
            )
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
