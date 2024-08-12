import React, { useEffect, useState } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button, FormControl, InputAdornment, OutlinedInput, TextField } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faPenNib, faTrash } from '@fortawesome/free-solid-svg-icons';
import { deleteSchoolApi, getSchoolsAPi, updateSchoolDetailsApi } from '../../services/allApi';
import { toast, ToastContainer } from 'react-toastify';
import Modal from 'react-bootstrap/Modal';
import { serverUrl } from '../../services/baseUrl';

function SchoolList() {
  const [schools,setSchools] = useState([])
  const [show, setShow] = useState(false);
  const [school, setSchool] = useState({})
  const [preview,setPreview] = useState("")
  const [basic, setbasic] = useState(false)
  const [url,seturl] = useState("")
  const [searchkey, setsearchkey] = useState('')


  const handleClose = () => {setShow(false);
    setbasic(false)
  }
  const handleShow = () => setShow(true);

  const getSchools = async ()=>{
    const result = await getSchoolsAPi(searchkey)
    console.log(result.data);
    setSchools( result.data)
  }

  const handleDelete=async(id)=>{
    console.log(id);
    const token = sessionStorage.getItem("token")
    if(token){
      let reqHeader={
        "Content-Type":"multipart/form-data",
        "Authorization":`Bearer ${token}`
      }
    const result = await deleteSchoolApi(id,reqHeader)
    console.log(result);
    if(result.status == 200){
      toast.success('School Deleted Successfully')
      getSchools()
    }
    }

  }
  const handleEdit = async(item)=>{
    setSchool(item)
    console.log(school);
    console.log(school.schoolImage);
    handleShow()

  }
  const handleNext = ()=>{
    setbasic(true)
  }
  const handleUpdate = async(e)=>{
    e.preventDefault()
    const token = sessionStorage.getItem("token")

    const { schoolratio, totalTeacher, toatalStudents,termFee, avgFee,TotalRating, avgStudents,totalFee,admissionFee,rating}= school
    //console.log(schoolratio, totalTeacher, toatalStudents,termFee, avgFee,TotalRating, avgStudents,totalFee,admissionFee,rating);
    if(!schoolratio || !totalTeacher || !toatalStudents || !termFee || !avgFee || !TotalRating || !avgStudents || !totalFee || !admissionFee || !rating){
      toast.info('Please Fill the form completly')
    }
    else{

      const reqBody = new FormData()

      reqBody.append("schoolName",school.schoolName)
      reqBody.append("schoolRegNo",school.schoolRegNo)
      reqBody.append("schoolAffliation",school.schoolAffliation)
      reqBody.append("schoolPhoneNo",school.schoolPhoneNo)
      reqBody.append("schoolEmail",school.schoolEmail)
      reqBody.append("schoolLocation",school.schoolLocation)
      reqBody.append("schoolDistrict",school.schoolDistrict)
      reqBody.append("schoolImage",school.schoolImage)
      reqBody.append("schoolratio",schoolratio)
      reqBody.append("toatalStudents",toatalStudents)
      reqBody.append("termFee",termFee)
      reqBody.append("avgFee",avgFee)
      reqBody.append("TotalRating",TotalRating)
      reqBody.append("totalTeacher",totalTeacher)
      reqBody.append("avgStudents",avgStudents)
      reqBody.append("totalFee",totalFee)
      reqBody.append("admissionFee",admissionFee)
      reqBody.append("rating",rating)
      if(token){
        let reqHeader={
          "Content-Type":"multipart/form-data",
          "Authorization":`Bearer ${token}`
        }
        const result = await updateSchoolDetailsApi(reqBody,reqHeader,school._id)
        console.log(result);
        if(result.status == 200){
          //setImageUploads(true)
          //console.log(schoolid);
          toast.success('School Details Updated')
          //navigate('/home-admin')
          setbasic(false)
          handleClose()
        }
        else{
          toast.error('Something went wrong')
        } 

      }
     
    }

  }
  useEffect(()=>{
    getSchools()
    if(url){
      setPreview(URL.createObjectURL(url))
      setSchool({...school,schoolImage:preview})
      console.log(school.schoolImage);
    }
  },[url,searchkey])
  return (
    <>
      <div className='d-flex align-items-center justify-content-center flex-column'>
        <h3 className='text-center text-danger mt-5'><b >School List</b></h3>
        <div > 
          <FormControl sx={{ m: 5, width: '27ch' }} variant="outlined">
            <OutlinedInput
              id="outlined-adornment-weight"
              placeholder='Enter School Name'
              onChange={(e)=>setsearchkey(e.target.value)}
              className=''
              endAdornment={<InputAdornment position="end"><FontAwesomeIcon icon={faMagnifyingGlass} /></InputAdornment>}                     
            />
          </FormControl>
          </div>
        <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table" className='border shadow px-3'>
          <TableHead>
            <TableRow>
              <TableCell className='text-danger'><b>ID</b></TableCell>
              <TableCell align="center" className='text-danger'><b>School Name</b></TableCell>
              <TableCell align="center" className='text-danger'><b>Action</b></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            
              {schools.map((item)=>(
                <TableRow
              
              >
                <TableCell component="th" scope="row">
                  <h6>{item.schoolRegNo}</h6>
                </TableCell>
                <TableCell align="center"><h6 className=' text-primary'><b>{item.schoolName}</b></h6></TableCell>
                <TableCell align="center" >
                  <button className='btn btn-warning me-2'  onClick={()=>handleEdit(item)}><FontAwesomeIcon icon={faPenNib} /></button>
                <button className='btn btn-danger' onClick={()=>handleDelete(item._id)} ><FontAwesomeIcon icon={faTrash}  /></button>
                </TableCell>
              </TableRow>))}
         
          </TableBody>
          
        </Table>
      </TableContainer>
      <ToastContainer theme='colored'  position='top-center' autoClose={2000} />
  
      </div>
      <Modal show={show} onHide={handleClose} style={{width:''}}>
        <Modal.Header closeButton>
          <Modal.Title>Edit School</Modal.Title>
        </Modal.Header>
        <Modal.Body>

        <div className='w-100 m-3 d-flex align-items-center justify-content-center flex-column'>
      {!basic && <div className=' row d-flex align-items-center justify-content-center  border shadow rounded w-75 p-5'>
          <div className='col-md-12 mb-4 d-flex align-items-center justify-content-center '>
          <label htmlFor="image">
                        <input id='image'  type="file" style={{display:'none'}} onChange={(e)=>seturl(e.target.files[0])} />
                        <img src={preview?preview:`${serverUrl}/uploads/${school.schoolImage}`} alt=" no image" className='w-75 ' />
                        </label>
          </div>
      <div className='col-md-12'>
          <TextField id="outlined-basic" label="School Name" value={school.schoolName} variant="outlined" className='w-100 mb-3' onChange={(e)=>setSchool({...school,schoolName:e.target.value})} />
          <TextField id="outlined-basic" label="Reg No" value={school.schoolRegNo}  variant="outlined" className='w-100 mb-3' onChange={(e)=>setSchool({...school,schoolRegNo:e.target.value})}  />
          <TextField id="outlined-basic" label="Affiliated To" value={school.schoolAffliation}  variant="outlined" className='w-100 mb-3' onChange={(e)=>setSchool({...school,schoolAffliation:e.target.value})}  />
          <TextField id="outlined-basic" label="Phone No" value={school.schoolPhoneNo}  variant="outlined" className='w-100 mb-3' onChange={(e)=>setSchool({...school,schoolPhoneNo:e.target.value})}  />
          <TextField id="outlined-basic" label="Email Id" value={school.schoolEmail}  variant="outlined" className='w-100 mb-3' onChange={(e)=>setSchool({...school,schoolEmail:e.target.value})}  />
          <TextField id="outlined-basic" label="Location" value={school.schoolLocation}  variant="outlined" className='w-100 mb-3' onChange={(e)=>setSchool({...school,schoolLocation:e.target.value})}  />
          <TextField id="outlined-basic" label="District" value={school.schoolDistrict}  variant="outlined" className='w-100 mb-3' onChange={(e)=>setSchool({...school,schoolDistrict:e.target.value})}   />
          <div className='d-flex justify-content-between'>
          <Button variant="contained" onClick={handleNext} >Next</Button> 
          </div>
      </div>
  
      </div>}
      {basic && <div className=' row d-flex align-items-center justify-content-center  border shadow rounded w-75 p-5 mt-5'>
          <div className='col-md-12'>
          <TextField id="outlined-basic" label="Teacher to Student Ratio" variant="outlined" value={school.schoolratio} className='w-100 mb-3' onChange={(e)=>setSchool({...school,schoolratio:e.target.value})} />
          <TextField id="outlined-basic" label="Average no of Students in Each Class" value={school.avgStudents} variant="outlined" className='w-100 mb-3' onChange={(e)=>setSchool({...school,avgStudents:e.target.value})} />
          <TextField id="outlined-basic" label="Total Fees" value={school.totalFee} variant="outlined" className='w-100 mb-3' onChange={(e)=>setSchool({...school,totalFee:e.target.value})} />
          <TextField id="outlined-basic" label="Admission Fee" value={school.admissionFee} variant="outlined" className='w-100 mb-3' onChange={(e)=>setSchool({...school,admissionFee:e.target.value})} />
          <TextField id="outlined-basic" label="Rating" value={school.rating} variant="outlined" className='w-100 mb-3' onChange={(e)=>setSchool({...school,rating:e.target.value})} />
  
          
          </div>
      <div className='col-md-12'>
          <TextField id="outlined-basic" label="Total No of Teachers" value={school.totalTeacher} variant="outlined" className='w-100 mb-3' onChange={(e)=>setSchool({...school,totalTeacher:e.target.value})} />
          <TextField id="outlined-basic" label="Total No of Students" value={school.toatalStudents} variant="outlined" className='w-100 mb-3'  onChange={(e)=>setSchool({...school,toatalStudents:e.target.value})}/>
          <TextField id="outlined-basic" label="Term Fee" variant="outlined" value={school.termFee} className='w-100 mb-3' onChange={(e)=>setSchool({...school,termFee:e.target.value})} />
          <TextField id="outlined-basic" label="Avg Fee in a Year" value={school.avgFee} variant="outlined" className='w-100 mb-3' onChange={(e)=>setSchool({...school,avgFee:e.target.value})} />
          <TextField id="outlined-basic" label="Total Rating" value={school.TotalRating} variant="outlined" className='w-100 mb-3' onChange={(e)=>setSchool({...school,TotalRating:e.target.value})} />
  
          
  
      </div>
      
  
      </div>}
     {/*  {imageUploads &&<div className=' row d-flex align-items-center justify-content-center  border shadow rounded w-75 p-5 mt-5'>
      <div className=' row d-flex align-items-center justify-content-center   w-75 px-5 m-3'>
          <div className='col-md-12  d-flex align-items-center justify-content-center flex-column '>
                          <TextField
                           id="outlined-multiline-fl nbexible"
                          label="Vision"
                          multiline
                          maxRows={4}
                          placeholder='Vision'
                          className='w-100 mt-5' onChange={(e)=>setMoreSchoolDetails({...moreSchoolDetail,vision:e.target.value})}
                          />
              </div>
              <div className='col-md-12 d-flex align-items-center justify-content-center flex-column '>
              
                          <TextField
                           id="outlined-multiline-flexible"
                          label="Mission"
                          multiline
                          maxRows={4}
                          placeholder='Mission'
                          className='w-100 mt-5'
                          onChange={(e)=>setMoreSchoolDetails({...moreSchoolDetail,mission:e.target.value})}
                          />
             
      
              </div> 
               </div>
               <div className=' row d-flex align-items-center justify-content-center  w-75 px-5  mt-5'>
          <div className='col-md-6 d-flex align-items-center justify-content-center flex-column '>
              <label htmlFor="princi">
                            <input id='princi' type="file" style={{display:'none'}} onChange={(e)=>setMoreSchoolDetails({...moreSchoolDetail,imgPrincipal:e.target.files[0]})} />
                            <img src={principalPreview?principalPreview:'https://cdn.pixabay.com/photo/2016/01/03/00/43/upload-1118929_960_720.png'} alt=" no image" className='w-50 ms-5 ' />
                          </label>
                          <TextField id="outlined-basic" label="Principal" variant="outlined" className='w-100 mt-3' onChange={(e)=>setMoreSchoolDetails({...moreSchoolDetail,principal:e.target.value})} />
  
                        
              </div>
              <div className='col-md-6 d-flex align-items-center justify-content-center flex-column '>
              <label htmlFor="vice" >
                            <input id='vice' type="file" style={{display:'none'}} onChange={(e)=>setMoreSchoolDetails({...moreSchoolDetail,imgVicePrincipal:e.target.files[0]})} />
                            <img src={vicePrincipalPreview?vicePrincipalPreview:'https://cdn.pixabay.com/photo/2016/01/03/00/43/upload-1118929_960_720.png'} alt=" no image" className='w-50 ms-5  ' />
                          </label>
                          <TextField id="outlined-basic" label="Vice-Principal" variant="outlined" className='w-100 mt-3' onChange={(e)=>setMoreSchoolDetails({...moreSchoolDetail,vicePrincipal:e.target.value})} />
  
             
      
              </div> 
               </div>
        
              <div className='d-flex justify-content-between mt-5'>
          <Button className='btn btn-warning' variant="contained">Cancel</Button>
          <Button variant="contained" onClick={UpdateMoreData}>Save</Button>
          <Button className='btn btn-success' variant="contained" onClick={showAddStaff}>Next</Button>
          </div>
      </div>}  */}
     

    
      
          
      </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleUpdate}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
   
    </>
  )
}

export default SchoolList
