import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import styled from "./TableSummary.module.scss";

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

export default function TableSummary() {
  return (
    <div className={styled.wrapper}>
      <Table size="small" className={styled.table}>
        <TableHead>
            <TableRow>
                <TableCell colSpan="2" component="th" scope="row">Summary</TableCell>
            </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.month}
            >
                <TableCell>{row.month}</TableCell>
                <TableCell>{row.sum}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}