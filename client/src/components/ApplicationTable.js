import React, {useState, useRef, useEffect} from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios'
function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];



export const ApplicationTable = () => {
  const [data, setData] = useState()
  const fetchedApplications = useRef(false)

  const fetchMortgageApplications = async () => {
      try {
          const results = await axios.get('http://localhost:8080/applications')
          setData(results.data)
      } catch (err) {}
  }
  
  useEffect(() => {
    if(fetchedApplications.current) return
    fetchedApplications.current = true
    fetchMortgageApplications()
},[data]) 

  return (
    <>
      {data && (
        console.log(data),
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
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
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
      )}
    </>
  );
}
