import React, {useState, useRef, useEffect} from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export const ApplicationTable = ({ data }) => {
  return (
    <>
      {data && (
        <Paper sx={{margin:'5em 0'}} elevation={10}>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>First Name</TableCell>
                  <TableCell align="right">Email</TableCell>
                  <TableCell align="right">Down Payment</TableCell>
                  <TableCell align="right">Home Price</TableCell>
                  <TableCell align="right">Loan Preference</TableCell>
                  <TableCell align="right">Loan Type</TableCell>
                  <TableCell align="right">Zip Code</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data.map((row) => (
                  <TableRow
                    key={row._id}
                    sx={{'&:last-child td, &:last-child th':{ border: 0 }}}
                  >
                    <TableCell component="th" scope="row">
                      {row.firstName}
                    </TableCell>
                    <TableCell align="right">{row.email}</TableCell>
                    <TableCell align="right">{row.downPayment}</TableCell>
                    <TableCell align="right">{row.homePrice}</TableCell>
                    <TableCell align="right">{row.loanPreference}</TableCell>
                    <TableCell align="right">{row.loanType}</TableCell>
                    <TableCell align="right">{row.zipCode}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      )}
    </>
  );
}
