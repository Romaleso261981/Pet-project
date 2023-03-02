import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import styled from "./TableSummary.module.scss";
import { useEffect, useState } from 'react';
import { summaryTransaction } from '../../services/transactionAPI';

export default function TableSummary({transaction, needUpdate}) {
  const [summaryList, setSummaryList] = useState([]);
  
  useEffect(() => {
    async function getSummaryList({transaction}) {
        try {
          const data = await summaryTransaction({transaction});
          const filterData = data.map(({_id, totalAmount}) => ({_id, totalAmount}));
          if (filterData.length > 6) filterData.slice(0, 5);
          
          const necessaryData = filterData.map(({_id, totalAmount}) => {
            const forMonth = {}

            const date = new Date();
            date.setMonth(_id.month - 1);
            const month = date.toLocaleString('en-US', { month: 'long' });

            forMonth.month = month;
            forMonth.totalAmount = totalAmount;
            return forMonth
          })
          setSummaryList(necessaryData);
        } catch (error) {
          console.log(error);
        }
    }
    getSummaryList({transaction})
  }, [transaction, needUpdate]);

  return (
    <div className={styled.wrapper}>
      <Table size="small" className={styled.table}>
        <TableHead>
            <TableRow>
                <TableCell colSpan="2" component="th" scope="row">Summary</TableCell>
            </TableRow>
        </TableHead>
        <TableBody>
          {summaryList.map(
            ({ month, totalAmount }) => (
              <TableRow key={month}>
                <TableCell>{month}</TableCell>
                <TableCell>{totalAmount}</TableCell>
              </TableRow>
            )
          )}
        </TableBody>
      </Table>
    </div>
  );
}