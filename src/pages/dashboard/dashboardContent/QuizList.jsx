import * as React from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from '../Title';

// Generate Order Data
function createData(id, serialNumber, name, level, score) {
  return { id, serialNumber, name, level, score };
}

const rows = [
  createData(
    0,
    1,
    'Elvis Presley',
    500,
    95,
  ),
  createData(
    1,
    2,
    'Paul McCartney',
    400,
    90,
  ),
  createData(2, 3, 'Tom Scholz', 300,  85),
  createData(
    3,
    4,
    'Michael Jackson',
   200,
    80,
  ),
  createData(
    4,
   5,
    'Bruce Springsteen',
   200,
    75,
  ),
];

function preventDefault(event) {
  event.preventDefault();
}

export default function QuizList() {
  return (
    <React.Fragment>
      <Title>Leader board</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Serial Number</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Level</TableCell>
            <TableCell align="right">Overall Score</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.serialNumber}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.level}</TableCell>
              <TableCell align="right">{`${row.score}%`}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Link href="#" onClick={preventDefault} sx={{ mt: 3, color: 'purple', textDecoration: 'none' }}>
        See more participants
      </Link>
    </React.Fragment>
  );
}