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


function AddSchool() {
  //state to store school details
  const [schoolDetails, setSchoolDetails] = useState({
    schoolName:"",
    schoolRegNo:"",
    schoolAffliation:"",
    schoolPhoneNo:"",
    schoolEmail:"",
    schoolLocation:"",
    schoolDistrict:"",
    schoolImage:"",
    schoolWebsite:""
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
    navigate('/home-admin')
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
    schoolImage:"",
    schoolWebsite:''
    })
    const [preview, setPreview] = useState("")
    navigate('/home-admin')

  }

  const handleSave = async(e)=>{
    e.preventDefault()
    const {schoolName, schoolRegNo, schoolAffliation, schoolPhoneNo, schoolEmail, schoolLocation,schoolDistrict, schoolWebsite,schoolImage} = schoolDetails
    if(!schoolName || !schoolRegNo || !schoolAffliation || !schoolPhoneNo || !schoolEmail || !schoolLocation || !schoolWebsite || !schoolDistrict || !schoolImage){
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
      reqBody.append("schoolWebsite",schoolWebsite)

      
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
      reqBody.append("schoolWebsite",schoolDetails.schoolWebsite)

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
    if(sessionStorage.getItem("token")){
      setToken(sessionStorage.getItem("token"))
    }
    else{
      setToken("")
    }
  },[])
 
  
  //console.log(schoolDetails);
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
          <TextField id="outlined-basic" label="Website" value={schoolDetails.schoolWebsite}  variant="outlined" className='w-100 mb-3' onChange={(e)=>setSchoolDetails({...schoolDetails,schoolWebsite:e.target.value})}   />

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
          <Button className='btn btn-warning' variant="contained" onClick={handleClose}>Cancel</Button>
          <Button variant="contained" onClick={handleSaveBasic}>Save</Button>
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

export default AddSchool
