import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import { IoTrashOutline } from "react-icons/io5";
import styled from "./TableTransaction.module.scss";

function createData(date, description, category, sum) {
  return { date, description, category, sum };
}

const headers = [
    'date', 
    'description', 
    'category', 
    'sum',
    ''
]

const rows = [
  createData('21.11.2019', 'Undeground (Lorem ipsum... ', 'Transport', '30.00 UAH.', 'icon'),
  createData('21.11.2019', 'Bananas', 'Products', '50.00 UAH.', 'icon'),
];

export default function TableTransaction() {
  return (
    <TableContainer className={styled.wrapper}>
      <Table size="small" className={styled.table}>
        <TableHead className={styled.table__head}>
            <TableRow>
                {headers.map((header) => (
                <TableCell key={header} component="th" scope="row">{header}</TableCell>
                ))}
            </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.category}
            >
                <TableCell component="th" scope="row">
                    {row.date}
                </TableCell>
                <TableCell>{row.description}</TableCell>
                <TableCell>{row.category}</TableCell>
                <TableCell>- {row.sum}</TableCell>
                <TableCell><IoTrashOutline /></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}