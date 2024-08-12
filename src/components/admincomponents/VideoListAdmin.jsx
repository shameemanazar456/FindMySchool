import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button, FormControl, InputAdornment, OutlinedInput } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

function VideoListAdmin() {
  return (
    <div className='d-flex align-items-center justify-content-center flex-column'>
      <div > 
        <FormControl sx={{ m: 5, width: '27ch' }} variant="outlined">
          <OutlinedInput
            id="outlined-adornment-weight"
            placeholder='Enter Video Name'
            className=''
            endAdornment={<InputAdornment position="end"><FontAwesomeIcon icon={faMagnifyingGlass} /></InputAdornment>}                     
          />
        </FormControl>
        </div>
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className='text-danger'><b>ID</b></TableCell>
            <TableCell align="center" className='text-danger'><b>School Name</b></TableCell>
            <TableCell align="center"></TableCell>
            <TableCell align="center"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          
            <TableRow
              key='1'
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                1.
              </TableCell>
              <TableCell align="center">Cochin Internation School</TableCell>
              <TableCell align="center"><Button>Edit</Button></TableCell>
              <TableCell align="center"><Button>Delete</Button></TableCell>
            </TableRow>
            <TableRow
              key='1'
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                2.
              </TableCell>
              <TableCell align="center">Cochin Internation School</TableCell>
              <TableCell align="center"><Button>Edit</Button></TableCell>
              <TableCell align="center"><Button>Delete</Button></TableCell>
            </TableRow>
            <TableRow
              key='1'
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                3.
              </TableCell>
              <TableCell align="center">Cochin Internation School</TableCell>
              <TableCell align="center"><Button>Edit</Button></TableCell>
              <TableCell align="center"><Button>Delete</Button></TableCell>
            </TableRow>
        </TableBody>
        
      </Table>
    </TableContainer>
    </div>
  )
}

export default VideoListAdmin
