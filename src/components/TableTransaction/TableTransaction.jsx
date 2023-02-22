import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import { IoTrashOutline } from "react-icons/io5";
import { 
    Wrapper,
    TableSt, 
    Head
} from './TableTransaction.styled';


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
  createData('21.11.2019', 'Undeground(Lorem ipsum... ', 'Transport', '- 30.00 UAH.', 'icon'),
  createData('21.11.2019', 'Bananas', 'Products', '- 50.00 UAH.', 'icon'),
];

export default function TableTransaction() {
  return (
    <Wrapper>
      <TableSt size="small">
        <Head>
            <TableRow>
                {headers.map((header) => (
                <TableCell key={header} component="th" scope="row">{header}</TableCell>
                ))}
            </TableRow>
        </Head>
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
                <TableCell>{row.sum}</TableCell>
                <TableCell><IoTrashOutline /></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </TableSt>
    </Wrapper>
  );
}