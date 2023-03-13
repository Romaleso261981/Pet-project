import { useEffect, useState } from "react";
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import { Btn } from "../Buttons/Btn";
import styled from "./TableTransaction.module.scss";
import { deleteTransaction, fetchData } from "../../services/transactionAPI";

const headers = [
  "Н/П",
  "тип техніки",
  "модель",
  "ФІО клієнта",
  "телефон",
  "адресса",
  "опис ремонту",
  "вартість ремонту / грн",
  "статус",
];

export function TableTransaction({
  transaction,
  date,
  needUpdate,
  updateData,
}) {
  const [transactionList, setTransactionList] = useState([]);
  const [updateList, setUpdateList] = useState(0);

  useEffect(() => {
    async function getTransactionForMonth({ transaction, date }) {
      try {
        const data = await fetchData({ transaction, date });
        const necessaryData = data
          .map(
            ({
              _id,
              name,
              phone,
              nameTechniques,
              descriptionRepair,
              modelTechniques,
              malfunction,
              adress,
              number,
              cost,
              type,
            }) => ({
              _id,
              name,
              nameTechniques,
              descriptionRepair,
              modelTechniques,
              phone,
              malfunction,
              adress,
              number,
              cost,
              type,
            })
          )
          .reverse();
        setTransactionList(necessaryData);
      } catch (error) {
        console.log(error);
      }
    }
    getTransactionForMonth({ transaction, date });
  }, [transaction, needUpdate, updateList]);

  async function onDelete(_id) {
    await deleteTransaction(_id);
    updateData(true);
    setUpdateList(updateList ^ 1);
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
            ({
              _id,
              number,
              name,
              phone,
              cost,
              nameTechniques,
              descriptionRepair,
              modelTechniques,
              adress,
              type,
            }) => (
              <TableRow key={_id}>
                <TableCell>{number}</TableCell>
                <TableCell>{nameTechniques}</TableCell>
                <TableCell>{modelTechniques}</TableCell>
                <TableCell component="th" scope="row">
                  {name}
                </TableCell>
                <TableCell>{phone}</TableCell>
                <TableCell>{adress}</TableCell>
                <TableCell>{descriptionRepair}</TableCell>
                <TableCell>{cost}</TableCell>
                <TableCell>
                  <Btn
                    onClick={() => onDelete(_id)}
                    type="button"
                    text={type === "inWork" ? "в роботі" : "зроблено"}
                  />
                </TableCell>
              </TableRow>
            )
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
