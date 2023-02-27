import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import styled from "./TableSummary.module.scss";
import { useEffect, useState } from 'react';
import { summaryTransaction } from 'services/transactionAPI';

function createData(month, sum) {
  return { month, sum };
}

const rows = [
  createData('November', '10 000.00'),
  createData('October', '30 000.00'),
  createData('September', '30 000.00'),
  createData('August', '20 000.00'),
  createData('July', '15 000.00'),
  createData('June', '18 000.00'),
];

export default function TableSummary({transaction}) {
  const [summaryList, setSummaryList] = useState([]);
  
  useEffect(() => {
    async function getSummaryList({transaction}) {
        try {
          const data = await summaryTransaction({transaction});
          const filterData = data.map(({_id, totalAmount}) => ({_id, totalAmount}));
          if (filterData > 6) filterData.slice(0, 5);
          const formatData = filterData.map(({_id, totalAmount}) => {
            const date = new Date();
            date.setMonth(_id.month - 1);
            const month = date.toLocaleString('en-US', { month: 'long' });
            const forMonth = {month, totalAmount};
            return forMonth
          })
          setSummaryList(...summaryList, formatData)
        } catch (error) {
          console.log(error);
        }
    }
    getSummaryList({transaction})
  }, []);


  return (
    <div className={styled.wrapper}>
      <Table size="small" className={styled.table}>
        <TableHead>
            <TableRow>
                <TableCell colSpan="2" component="th" scope="row">Summary</TableCell>
            </TableRow>
        </TableHead>
        <TableBody>
          {summaryList.map(summary => (
            <TableRow key={summary.month} >
              <TableCell>{summary.month}</TableCell>
                <TableCell>{summary.totalAmount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}