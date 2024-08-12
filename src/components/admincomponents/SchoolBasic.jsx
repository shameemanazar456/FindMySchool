import React from 'react'
import AdminHeader from '../AdminHeader'

function SchoolBasic() {
  return (
    
    <div>
        <AdminHeader/>
              <h3 className='text-info text-center m-4'>Edit School Details</h3> 

         <div className=' row d-flex align-items-center justify-content-center  border shadow rounded w-75 p-5 mt-5'>
          <div className='col-md-6'>
          <TextField id="outlined-basic" label="Teacher to Student Ratio" variant="outlined" className='w-100 mb-3' />
          <TextField id="outlined-basic" label="Average no of Students in Each Class" variant="outlined" className='w-100 mb-3' />
          <TextField id="outlined-basic" label="Total Fees" variant="outlined" className='w-100 mb-3' />
          <TextField id="outlined-basic" label="Admission Fee" variant="outlined" className='w-100 mb-3' />
          <TextField id="outlined-basic" label="Rating" variant="outlined" className='w-100 mb-3' />
  
          
          </div>
      <div className='col-md-6'>
          <TextField id="outlined-basic" label="Total No of Teachers" variant="outlined" className='w-100 mb-3' />
          <TextField id="outlined-basic" label="Total No of Students" variant="outlined" className='w-100 mb-3' />
          <TextField id="outlined-basic" label="Term Fee" variant="outlined" className='w-100 mb-3' />
          <TextField id="outlined-basic" label="Avg Fee in a Year" variant="outlined" className='w-100 mb-3' />
          <TextField id="outlined-basic" label="Total Rating" variant="outlined" className='w-100 mb-3' />
  
          
  
      </div>
      <div className='d-flex justify-content-between'>
          <Button className='btn btn-warning' variant="contained">Cancel</Button>
          <Button variant="contained">Save</Button>
          <Button className='btn btn-success' variant="contained">Next</Button>
          </div>
  
      </div>
    <div className='d-flex align-items-center justify-content-center flex-column border shadow rounded w-75 m-5'>
        <div className=' row d-flex align-items-center justify-content-center   w-75 p-5 m-3'>
          <div className='col-md-6  d-flex align-items-center justify-content-center flex-column '>
              <label htmlFor="image">
                            <input id='image' type="file" style={{display:'none'}}  />
                            <img src='https://cdn.pixabay.com/photo/2016/01/03/00/43/upload-1118929_960_720.png' alt=" no image" className='w-50 ms-5 ' />
                          </label>
                          <TextField
                           id="outlined-multiline-flexible"
                          label="Vision"
                          multiline
                          maxRows={4}
                          placeholder='Vision'
                          className='w-100 mt-5'
                          />
              </div>
              <div className='col-md-6 d-flex align-items-center justify-content-center flex-column '>
              <label htmlFor="image" >
                            <input id='image' type="file" style={{display:'none'}}  />
                            <img src='https://cdn.pixabay.com/photo/2016/01/03/00/43/upload-1118929_960_720.png' alt=" no image" className='w-50 ms-5  ' />
                          </label>
                          <TextField
                           id="outlined-multiline-flexible"
                          label="Mission"
                          multiline
                          maxRows={4}
                          placeholder='Mission'
                          className='w-100 mt-5'
                          />
             
      
              </div> 
               </div>
               <div className=' row d-flex align-items-center justify-content-center  w-75 px-5  m-3'>
          <div className='col-md-6 d-flex align-items-center justify-content-center flex-column '>
              <label htmlFor="image">
                            <input id='image' type="file" style={{display:'none'}}  />
                            <img src='https://cdn.pixabay.com/photo/2016/01/03/00/43/upload-1118929_960_720.png' alt=" no image" className='w-50 ms-5 ' />
                          </label>
                          <TextField id="outlined-basic" label="Principal" variant="outlined" className='w-100 mt-3' />
  
                        
              </div>
              <div className='col-md-6 d-flex align-items-center justify-content-center flex-column '>
              <label htmlFor="image" >
                            <input id='image' type="file" style={{display:'none'}}  />
                            <img src='https://cdn.pixabay.com/photo/2016/01/03/00/43/upload-1118929_960_720.png' alt=" no image" className='w-50 ms-5  ' />
                          </label>
                          <TextField id="outlined-basic" label="Vice-Principal" variant="outlined" className='w-100 mt-3' />
  
             
      
              </div> 
               </div>
              <div className=' row d-flex align-items-center justify-content-center  w-75 px-5  m-3'>
          <div className='col-md-6 d-flex align-items-center justify-content-center flex-column '>
              <label htmlFor="image">
                            <input id='image' type="file" style={{display:'none'}}  />
                            <img src='https://cdn.pixabay.com/photo/2016/01/03/00/43/upload-1118929_960_720.png' alt=" no image" className='w-50 ms-5 ' />
                          </label>
                          <TextField id="outlined-basic" label="PTA President" variant="outlined" className='w-100 mt-3' />
  
                        
              </div>
              <div className='col-md-6 d-flex align-items-center justify-content-center flex-column '>
              <label htmlFor="image" >
                            <input id='image' type="file" style={{display:'none'}}  />
                            <img src='https://cdn.pixabay.com/photo/2016/01/03/00/43/upload-1118929_960_720.png' alt=" no image" className='w-50 ms-5  ' />
                          </label>
                          <TextField id="outlined-basic" label="Vice-President" variant="outlined" className='w-100 mt-3' />
  
             
      
              </div> 
              </div> 
             <div className='w-100 d-flex align-items-center justify-content-center flex-column' >
                <h3 className='text-info text-center my-5'>Staff Details</h3>
               <div className='d-flex align-items-center justify-content-center w-75 m-3' >
                 <p className='text-danger text-center'> No Staffs Added Yet</p>
                 <FormControl sx={{ m: 5, width: '27ch' }} variant="outlined">
            <OutlinedInput
              id="outlined-adornment-weight"
              placeholder='Enter Staff Name/Dept'
              className=''
              endAdornment={<InputAdornment position="end"><FontAwesomeIcon icon={faMagnifyingGlass} /></InputAdornment>}                     
            />
          </FormControl>
                 <button className='btn btn-warning ms-auto'> Add New Staff</button>
               </div>
               <div className='row d-flex align-items-center justify-content-center   w-100 p-2'>
                  <div className="col-md-1"></div>
                  <div className='col-md-10 d-flex align-items-center justify-content-center flex-column '>
                  <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell className='text-danger'><b>ID</b></TableCell>
                <TableCell align="center" className='text-danger'><b>Staff Name</b></TableCell>
                <TableCell align="center" className='text-danger'><b>Department</b></TableCell>
  
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
                  <TableCell align="center">Thomas</TableCell>
                  <TableCell align="center">English</TableCell>
  
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
                  <TableCell align="center">Neel</TableCell>
                  <TableCell align="center">English</TableCell>
  
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
                  <TableCell align="center">Max</TableCell>
                  <TableCell align="center">English</TableCell>
  
                  <TableCell align="center"><Button>Edit</Button></TableCell>
                  <TableCell align="center"><Button>Delete</Button></TableCell>
                </TableRow>
            </TableBody>
            
          </Table>
        </TableContainer>
                  </div>
                  <div className="col-md-1"></div>
                </div>
               </div>
              <div className='w-100 d-flex align-items-center justify-content-center flex-column' >
                <h3 className='text-info text-center my-5'>Gallery Images</h3>
               <div className='d-flex align-items-center justify-content-center w-75 m-3' >
                 <p className='text-danger text-center'> No Images Added Yet</p>
                 <FormControl sx={{ m: 5, width: '27ch' }} variant="outlined">
            <OutlinedInput
              id="outlined-adornment-weight"
              placeholder='Enter Event Name'
              className=''
              endAdornment={<InputAdornment position="end"><FontAwesomeIcon icon={faMagnifyingGlass} /></InputAdornment>}                     
            />
          </FormControl>
                 <button className='btn btn-warning ms-auto'> Add New Event</button>
               </div>
               <div className='row d-flex align-items-center justify-content-center   w-100 p-2'>
                  <div className="col-md-1"></div>
                  <div className='col-md-10 d-flex align-items-center justify-content-center flex-column '>
                  <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell className='text-danger'><b>ID</b></TableCell>
                <TableCell align="center" className='text-danger'><b>Event Name</b></TableCell>
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
                  <TableCell align="center">Arts Day</TableCell>
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
                  <TableCell align="center">Sports</TableCell>
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
                  <TableCell align="center">Annual Day</TableCell>
                  <TableCell align="center"><Button>Edit</Button></TableCell>
                  <TableCell align="center"><Button>Delete</Button></TableCell>
                </TableRow>
            </TableBody>
            
          </Table>
        </TableContainer>
                  </div>
                  <div className="col-md-1"></div>
                </div>
               </div>
          
              <div className='d-flex justify-content-between my-5 w-75 '>
          <Button className='btn btn-warning' variant="contained">Cancel</Button>
          <Button variant="contained">Save</Button>
          <Button className='btn btn-success' variant="contained">Next</Button>
          
               </div>
     </div>
      
    </div>
  )
}

export default SchoolBasic
