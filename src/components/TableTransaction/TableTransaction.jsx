import { useEffect, useState } from "react";
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import { IoTrashOutline } from "react-icons/io5";
import styled from "./TableTransaction.module.scss";
import { deleteTransaction, fetchData } from "../../services/transactionAPI";

const headers = ["Н/П", "ФІО клієнта","телефон", "тип техніки", "адресса"];

export function TableTransaction({ transaction, date, needUpdate, updateData,toggleModal }) {
  const [transactionList, setTransactionList] = useState([]);
  const [updateList, setUpdateList] = useState(0);



  
  useEffect(() => {
    async function getTransactionForMonth({ transaction, date }) {
      try {
        const data = await fetchData({ transaction, date });
        const necessaryData = data
          .map(({ _id, name, phone, nameTechniques, malfunction, adress, number }) => ({
            _id,
            name,
            nameTechniques,
            phone,
            malfunction,
            adress,
            number
          }))
          .reverse();
        setTransactionList(necessaryData);
      } catch (error) {
        console.log(error);
      }
    }
    getTransactionForMonth({transaction, date})
  }, [transaction, needUpdate, updateList]);
  
  async function onDelete(_id) {
    await deleteTransaction(_id);
    updateData(true)
    setUpdateList(updateList^1);
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
            ({ _id, name, phone, nameTechniques, malfunction, adress, number }) => (
              <TableRow key={_id}>
                <TableCell>{number}</TableCell>
                <TableCell component="th" scope="row">
                  {name}
                </TableCell>
                <TableCell>{phone}</TableCell>
                <TableCell>{nameTechniques}</TableCell>
                {/* <TableCell>{malfunction}</TableCell> */}
                <TableCell>{adress}</TableCell>
                <TableCell>
                  <button
                    type="button"
                    className={styled.trash}
                    // onClick={() => onDelete(_id)}
                    onClick={toggleModal}
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
