import { faArrowLeft, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button, FormControl, InputAdornment, OutlinedInput, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import AdminHeader from '../../components/AdminHeader'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addSchoolApi, updateMoreSchoolDetailsApi, updateSchoolDetailsApi } from '../../services/allApi'
import Modal from 'react-bootstrap/Modal';


function AddSchoolSecond() {
      //state to store school details
  const [schoolDetails, setSchoolDetails] = useState({
    schoolName:"",
    schoolRegNo:"",
    schoolAffliation:"",
    schoolPhoneNo:"",
    schoolEmail:"",
    schoolLocation:"",
    schoolDistrict:"",
    schoolImage:""
  })
  const [schoolBasic,setSchoolBasic]=useState({
    schoolratio:"",
    totalTeacher:"",
    avgStudents:"",
    toatalStudents:"",
    totalFee:"",
    termFee:"",
    admissionFee:"",
    avgFee:"",
    rating:"",
    TotalRating:""
  })

  const [moreSchoolDetail, setMoreSchoolDetails] = useState({
    vision:"",
    mission:"",
    principal:"",
    imgPrincipal:"",
    vicePrincipal:"",
    imgVicePrincipal:""
  })

  const [token, setToken]=useState("")
  const [preview,setPreview]=useState("")
  const [show, setShow] = useState(false);
  const [schoolid, setSchoolId] = useState("")

  const [basic, setbasic] = useState(false)
  const [imageUploads, setImageUploads] = useState(false)
  const [principalPreview, setPrincipalPreview]= useState("")
  const [vicePrincipalPreview,setVicePrincipalpreview] = useState("")
  const [staffUploads, setStaffUploads] = useState(false)
  const [galleryUploads,setGalleryUplaods] = useState(false)


  const navigate = useNavigate()

  const handleClose = () => {

    setShow(false);
  }
  const handleShow = () => setShow(true);

  const handleCancel=()=>{
    setSchoolDetails({
    schoolName:"",
    schoolRegNo:"",
    schoolAffliation:"",
    schoolPhoneNo:"",
    schoolEmail:"",
    schoolLocation:"",
    schoolDistrict:"",
    schoolImage:""
    })
    const [preview, setPreview] = useState("")

  }

  const handleSave = async(e)=>{
    e.preventDefault()
    const {schoolName, schoolRegNo, schoolAffliation, schoolPhoneNo, schoolEmail, schoolLocation,schoolDistrict, schoolImage} = schoolDetails
    if(!schoolName || !schoolRegNo || !schoolAffliation || !schoolPhoneNo || !schoolEmail || !schoolLocation || !schoolDistrict || !schoolImage){
      console.log('e');
      toast.info('Please fill the form completly')

    }
    else{
      const reqBody = new FormData()

      reqBody.append("schoolName",schoolName)
      reqBody.append("schoolRegNo",schoolRegNo)
      reqBody.append("schoolAffliation",schoolAffliation)
      reqBody.append("schoolPhoneNo",schoolPhoneNo)
      reqBody.append("schoolEmail",schoolEmail)
      reqBody.append("schoolLocation",schoolLocation)
      reqBody.append("schoolDistrict",schoolDistrict)
      reqBody.append("schoolImage",schoolImage)
      if(token){
        let reqHeader={
          "Content-Type":"multipart/form-data",
          "Authorization":`Bearer ${token}`
        }
        const result = await addSchoolApi(reqBody,reqHeader)
        console.log(result);
        if(result.status == 200){
          handleShow(true)
          setSchoolId(result.data._id)
          console.log(schoolid);

         
        }
        else{
          toast.error('Something went wrong')
        }

      }
    }
   

  }

  const handleSaveBasic = async (e)=>{
    e.preventDefault()
    const { schoolratio, totalTeacher, toatalStudents,termFee, avgFee,TotalRating, avgStudents,totalFee,admissionFee,rating}= schoolBasic
    console.log(schoolratio, totalTeacher, toatalStudents,termFee, avgFee,TotalRating, avgStudents,totalFee,admissionFee,rating);
    if(!schoolratio || !totalTeacher || !toatalStudents || !termFee || !avgFee || !TotalRating || !avgStudents || !totalFee || !admissionFee || !rating){
      toast.info('Please Fill the form completly')
    }
    else{

      const reqBody = new FormData()

      reqBody.append("schoolName",schoolDetails.schoolName)
      reqBody.append("schoolRegNo",schoolDetails.schoolRegNo)
      reqBody.append("schoolAffliation",schoolDetails.schoolAffliation)
      reqBody.append("schoolPhoneNo",schoolDetails.schoolPhoneNo)
      reqBody.append("schoolEmail",schoolDetails.schoolEmail)
      reqBody.append("schoolLocation",schoolDetails.schoolLocation)
      reqBody.append("schoolDistrict",schoolDetails.schoolDistrict)
      reqBody.append("schoolImage",schoolDetails.schoolImage)
      reqBody.append("schoolratio",totalTeacher)
      reqBody.append("toatalStudents",toatalStudents)
      reqBody.append("termFee",termFee)
      reqBody.append("avgFee",avgFee)
      reqBody.append("TotalRating",TotalRating)
      reqBody.append("avgStudents",avgStudents)
      reqBody.append("totalFee",totalFee)
      reqBody.append("admissionFee",admissionFee)
      reqBody.append("rating",rating)
      if(token){
        let reqHeader={
          "Content-Type":"multipart/form-data",
          "Authorization":`Bearer ${token}`
        }
        const result = await updateSchoolDetailsApi(reqBody,reqHeader,schoolid)
        console.log(result);
        if(result.status == 200){
          //setImageUploads(true)
          console.log(schoolid);
          toast.success('School Details Added')
          navigate('/home-admin')
        }
        else{
          toast.error('Something went wrong')
        } 

      }
     
    }

  }
  const UpdateMoreData = async (e)=>{
    e.preventDefault()
    const { vision, mission, imgPrincipal,principal, imgVicePrincipal,vicePrincipal}= moreSchoolDetail
    if(!vision || !mission || !imgPrincipal || !principal || !imgVicePrincipal || !vicePrincipal){
      toast.info('Please Fill the form completly')
    }
    else{

      const reqBody = new FormData()

      reqBody.append("schoolName",schoolDetails.schoolName)
      reqBody.append("schoolRegNo",schoolDetails.schoolRegNo)
      reqBody.append("schoolAffliation",schoolDetails.schoolAffliation)
      reqBody.append("schoolPhoneNo",schoolDetails.schoolPhoneNo)
      reqBody.append("schoolEmail",schoolDetails.schoolEmail)
      reqBody.append("schoolLocation",schoolDetails.schoolLocation)
      reqBody.append("schoolDistrict",schoolDetails.schoolDistrict)
      reqBody.append("schoolImage",schoolDetails.schoolImage)
      reqBody.append("schoolratio",schoolBasic.totalTeacher)
      reqBody.append("toatalStudents",schoolBasic.toatalStudents)
      reqBody.append("termFee",schoolBasic.termFee)
      reqBody.append("avgFee",schoolBasic.avgFee)
      reqBody.append("TotalRating",schoolBasic.TotalRating)
      reqBody.append("avgStudents",schoolBasic.avgStudents)
      reqBody.append("totalFee",schoolBasic.totalFee)
      reqBody.append("admissionFee",schoolBasic.admissionFee)
      reqBody.append("rating",schoolBasic.rating)
      reqBody.append("vision",vision)
      reqBody.append("mission",mission)
      reqBody.append("imgPrincipal",imgPrincipal)
      reqBody.append("principal",principal)
      reqBody.append("imgVicePrincipal",imgVicePrincipal)
      reqBody.append("vicePrincipal",vicePrincipal)

      if(token){
        let reqHeader={
          "Content-Type":"multipart/form-data",
          "Authorization":`Bearer ${token}`
        }
        const result = await updateMoreSchoolDetailsApi(reqBody,reqHeader,schoolid)
        console.log(result);
       /*  if(result.status == 200){
          setImageUploads(true)
          console.log(schoolid);
        }
        else{
          toast.error('Something went wrong')
        } */ 

      }
     
    }

  }
  const  handleNext = ()=>{
    setbasic(true)
    setShow(false)
  }

  

  

  useEffect(()=>{
    if(schoolDetails.schoolImage){
      setPreview(URL.createObjectURL(schoolDetails.schoolImage))
    }
   
  },[schoolDetails.schoolImage])
  useEffect(()=>{
    
    if(moreSchoolDetail.imgPrincipal){
      setPrincipalPreview(URL.createObjectURL(moreSchoolDetail.imgPrincipal))
    }
  },[moreSchoolDetail.imgPrincipal])
  useEffect(()=>{
    
    if(moreSchoolDetail.imgVicePrincipal){
      setVicePrincipalpreview(URL.createObjectURL(moreSchoolDetail.imgVicePrincipal))
    }
    console.log(vicePrincipalPreview);
  },[moreSchoolDetail.imgVicePrincipal])

  useEffect(()=>{
    if(sessionStorage.getItem("token")){
      setToken(sessionStorage.getItem("token"))
    }
    else{
      setToken("")
    }
  },[])
  return (

    <>
    <AdminHeader/>
    <div className='mx-5 'style={{marginTop:'100px'}}>
        <Link to={'/home-admin'} style={{ textDecoration: 'none', color: 'blue' }} >
            <h5 className='text-info'> <FontAwesomeIcon icon={faArrowLeft} className='me-3' />Back to Home </h5>
  
          </Link>  
     </div>
      <div className='w-100 m-3 d-flex align-items-center justify-content-center flex-column'>
     <h3 className='text-info text-center m-4'>Add School</h3>
      <div className=' row d-flex align-items-center justify-content-center  border shadow rounded w-75 p-5'>
          <div className='col-md-6'>
          <label htmlFor="image">
                        <input id='image'  type="file" style={{display:'none'}} onChange={(e)=>setSchoolDetails({...schoolDetails, schoolImage:e.target.files[0]})} />
                        <img src={preview?preview:'https://cdn.pixabay.com/photo/2016/01/03/00/43/upload-1118929_960_720.png'} alt=" no image" className='w-75 ' />
                        <p className=' ms-5 ps-4 mt-2'>School Hero Image</p>
                      </label>
          </div>
      <div className='col-md-6'>
          <TextField id="outlined-basic" label="School Name" value={schoolDetails.schoolName} variant="outlined" className='w-100 mb-3' onChange={(e)=>setSchoolDetails({...schoolDetails,schoolName:e.target.value})} />
          <TextField id="outlined-basic" label="Reg No" value={schoolDetails.schoolRegNo}  variant="outlined" className='w-100 mb-3' onChange={(e)=>setSchoolDetails({...schoolDetails,schoolRegNo:e.target.value})}  />
          <TextField id="outlined-basic" label="Affiliated To" value={schoolDetails.schoolAffliation}  variant="outlined" className='w-100 mb-3' onChange={(e)=>setSchoolDetails({...schoolDetails,schoolAffliation:e.target.value})}  />
          <TextField id="outlined-basic" label="Phone No" value={schoolDetails.schoolPhoneNo}  variant="outlined" className='w-100 mb-3' onChange={(e)=>setSchoolDetails({...schoolDetails,schoolPhoneNo:e.target.value})}  />
          <TextField id="outlined-basic" label="Email Id" value={schoolDetails.schoolEmail}  variant="outlined" className='w-100 mb-3' onChange={(e)=>setSchoolDetails({...schoolDetails,schoolEmail:e.target.value})}  />
          <TextField id="outlined-basic" label="Location" value={schoolDetails.schoolLocation}  variant="outlined" className='w-100 mb-3' onChange={(e)=>setSchoolDetails({...schoolDetails,schoolLocation:e.target.value})}  />
          <TextField id="outlined-basic" label="District" value={schoolDetails.schoolDistrict}  variant="outlined" className='w-100 mb-3' onChange={(e)=>setSchoolDetails({...schoolDetails,schoolDistrict:e.target.value})}   />
          <div className='d-flex justify-content-between'>
          <Button className='btn btn-warning' variant="contained" onClick={handleCancel}>Cancel</Button>
          <Button variant="contained" onClick={handleSave} >Save</Button>
          </div>
      </div>
  
      </div>
      {basic && <div className=' row d-flex align-items-center justify-content-center  border shadow rounded w-75 p-5 mt-5'>
          <div className='col-md-6'>
          <TextField id="outlined-basic" label="Teacher to Student Ratio" variant="outlined" className='w-100 mb-3' onChange={(e)=>setSchoolBasic({...schoolBasic,schoolratio:e.target.value})} />
          <TextField id="outlined-basic" label="Average no of Students in Each Class" variant="outlined" className='w-100 mb-3' onChange={(e)=>setSchoolBasic({...schoolBasic,avgStudents:e.target.value})} />
          <TextField id="outlined-basic" label="Total Fees" variant="outlined" className='w-100 mb-3' onChange={(e)=>setSchoolBasic({...schoolBasic,totalFee:e.target.value})} />
          <TextField id="outlined-basic" label="Admission Fee" variant="outlined" className='w-100 mb-3' onChange={(e)=>setSchoolBasic({...schoolBasic,admissionFee:e.target.value})} />
          <TextField id="outlined-basic" label="Rating" variant="outlined" className='w-100 mb-3' onChange={(e)=>setSchoolBasic({...schoolBasic,rating:e.target.value})} />
  
          
          </div>
      <div className='col-md-6'>
          <TextField id="outlined-basic" label="Total No of Teachers" variant="outlined" className='w-100 mb-3' onChange={(e)=>setSchoolBasic({...schoolBasic,totalTeacher:e.target.value})} />
          <TextField id="outlined-basic" label="Total No of Students" variant="outlined" className='w-100 mb-3'  onChange={(e)=>setSchoolBasic({...schoolBasic,toatalStudents:e.target.value})}/>
          <TextField id="outlined-basic" label="Term Fee" variant="outlined" className='w-100 mb-3' onChange={(e)=>setSchoolBasic({...schoolBasic,termFee:e.target.value})} />
          <TextField id="outlined-basic" label="Avg Fee in a Year" variant="outlined" className='w-100 mb-3' onChange={(e)=>setSchoolBasic({...schoolBasic,avgFee:e.target.value})} />
          <TextField id="outlined-basic" label="Total Rating" variant="outlined" className='w-100 mb-3' onChange={(e)=>setSchoolBasic({...schoolBasic,TotalRating:e.target.value})} />
  
          
  
      </div>
      <div className='d-flex justify-content-between'>
          <Button className='btn btn-warning' variant="contained">Cancel</Button>
          <Button variant="contained" onClick={handleSaveBasic}>Save</Button>
          <Button className='btn btn-success' variant="contained" >Next</Button>
          </div>
  
      </div>}
      {imageUploads &&<div className=' row d-flex align-items-center justify-content-center  border shadow rounded w-75 p-5 mt-5'>
      <div className=' row d-flex align-items-center justify-content-center   w-75 px-5 m-3'>
          <div className='col-md-12  d-flex align-items-center justify-content-center flex-column '>
                          <TextField
                           id="outlined-multiline-flexible"
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
      </div>}
     { staffUploads && <div className=' row d-flex align-items-center justify-content-center  border shadow rounded w-75 p-5 mt-5'>
      <div className='w-100 d-flex align-items-center justify-content-center   flex-column' >
                <h3 className='text-info text-center my-3'>Staff Details</h3>
               <div className='d-flex align-items-center justify-content-center w-75  ' >
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
                  <div className='col-md-10 d-flex align-items-center justify-content-center  flex-column '>
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
        <div className=' mt-3  w-100 d-flex justify-content-between'>
          <Button className='btn btn-warning' variant="contained">Cancel</Button>
          <Button variant="contained">Save</Button>
          <Button className='btn btn-success' variant="contained" onClick={showAddGallery}>Next</Button>
          </div>
                  </div>
                  <div className="col-md-1"></div>
                  
                </div>
               
               </div>
      </div>}

     { galleryUploads && <div className=' row d-flex align-items-center justify-content-center  border shadow rounded w-75 p-5 mt-5'>
      <div className='w-100 d-flex align-items-center justify-content-center flex-column' >
                <h3 className='text-info text-center my-3'>Gallery Images</h3>
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
          </div>
      </div>}
      
          
      </div>
     

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>School Registered Successfully</Modal.Title>
        </Modal.Header>
        <Modal.Body>Click on Next to Save More Details</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="secondary" onClick={handleNext}>
           Next
          </Button>
               </Modal.Footer>
      </Modal>
      <ToastContainer theme='colored'  position='top-center' autoClose={2000} />

    </>
 
  )
}

export default AddSchoolSecond
