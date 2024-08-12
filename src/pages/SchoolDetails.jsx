import React, { useContext, useEffect, useState } from 'react'
import { Carousel, Table } from 'react-bootstrap'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { getASchoolApi } from '../services/allApi';
import { toast, ToastContainer } from 'react-toastify'
import Header from '../components/Header';
import { serverUrl } from '../services/baseUrl';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faEnvelope, faGlobe, faPhone } from '@fortawesome/free-solid-svg-icons';
import Footer from '../components/Footer';
import { isLoggedInContext } from '../context/Context';


function SchoolDetails() {
  const {isLoggedIn, setIsLoggedIn} = useContext(isLoggedInContext)

  const {id} = useParams()
  const [token,setToken] = useState(false)
  const [school,setSchool] = useState({})
  const navigate = useNavigate()
  console.log(id);

  const getASchool = async()=>{
    let tokenVerify = sessionStorage.getItem("token")
    if(tokenVerify){
      setToken(true)
      setIsLoggedIn(true)

      let reqHeader={
        "Content-Type":"multipart/form-data",
        "Authorization":`Bearer ${tokenVerify}`
      }
      const result = await getASchoolApi(id,reqHeader)
      console.log(result);
      if(result.status == 200){
        setSchool(result.data)

      }

  }
  else{
    toast.error('Please Login')
    setTimeout(()=>{
      navigate('/login')

    },2000)

  }
}

useEffect(()=>{
  getASchool()
},[])
  return (
    <>
    <Header/>
    <div className=''>
        <Link to={'/'} className='' style={{ textDecoration: 'none', color: 'blue' }} >
            <h5 className='text-info '> <FontAwesomeIcon icon={faArrowLeft} className='me-3' />Back to Home </h5>
  
          </Link>  
     </div>
    {token && <div>
      <h1 className='text-center text-danger my-5 py-4'>{school.schoolName}</h1>

      <div className='w-100 d-flex align-items-center justify-content-center '>
  
      <img src={`${serverUrl}/uploads/${school.schoolImage}`} alt="" className='w-75 rounded shadow' />  
      </div>   
      <div className='w-100 m-3 d-flex align-items-center justify-content-center flex-column'>
       <i > <h3 className='text-primary'>{school.schoolLocation}</h3></i>
       <i > <h4 className='text-primary'>{school.schoolDistrict}</h4></i>
       <i > <h4 className='text-primary'>{school.schoolAffliation} School</h4></i>

      </div>
     {/*  <div className='w-100 m-3 d-flex align-items-center justify-content-center flex-column '>
         <i> <h3 className='text-warning '>Our Team</h3></i>
  
         <Carousel data-bs-theme="dark" style={{width:'600px'}}>
        <Carousel.Item>
        <div className='row  d-flex align-items-center justify-content-center' style={{width:'600px'}}>
            
            <div className='col-md-6 d-flex align-items-center justify-content-center'> 
              <img className='' src="https://cochins.org/images/about-us/team/imageQVZHSkJqSW1yL21heGtGN05qSVcwUT09.jpeg" alt="" style={{width:'200px', height:'200px', borderRadius:'50%'}} />
            </div>
            <div className='col-md-6'>
                <i ><h4 className='text-info'>Mr. Mathew Roy</h4></i>
                <i ><h5 className='text-info'>Principal</h5></i>
                <i ><h6 className='text-info'>Phd</h6></i>
  
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
        <div className='row  d-flex align-items-center justify-content-center' style={{width:'600px'}}>
            
            <div className='col-md-6 d-flex align-items-center justify-content-center'> 
              <img className='' src="https://cochins.org/images/about-us/team/imageQVZHSkJqSW1yL21heGtGN05qSVcwUT09.jpeg" alt="" style={{width:'200px', height:'200px', borderRadius:'50%'}} />
            </div>
            <div className='col-md-6'>
                <i ><h4 className='text-info'>Mr. Mathew Roy</h4></i>
                <i ><h5 className='text-info'>Principal</h5></i>
                <i ><h6 className='text-info'>Phd</h6></i>
  
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
        <div className='row  d-flex align-items-center justify-content-center' style={{width:'600px'}}>
            
            <div className='col-md-6 d-flex align-items-center justify-content-center'> 
              <img className='' src="https://cochins.org/images/about-us/team/imageQVZHSkJqSW1yL21heGtGN05qSVcwUT09.jpeg" alt="" style={{width:'200px', height:'200px', borderRadius:'50%'}} />
            </div>
            <div className='col-md-6'>
                <i ><h4 className='text-info'>Mr. Mathew Roy</h4></i>
                <i ><h5 className='text-info'>Principal</h5></i>
                <i ><h6 className='text-info'>Phd</h6></i>
  
            </div>
          </div>
        </Carousel.Item>
        
      </Carousel>
    
         
      </div>   */}
       <div className='w-100 m-3 d-flex align-items-center justify-content-center flex-column '>
       <i > <h3 className='text-warning mt-5'>School Details</h3></i>
       <Table striped="columns" className='w-50 shadow border p-5 mt-5'>
     
      <tbody className='mt-5'>
        <tr>
          <td className='px-5 py-3'>Teacher To Student Ratio</td>
          <td>{school.schoolratio}</td>
        </tr>
        <tr>
          <td className='px-5 py-3'>Total Number Of Teachers</td>
          <td>{school.totalTeacher}</td>
        </tr>
        <tr>
          <td className='px-5 py-3'>Total Number Of Students</td>
          <td>{school.toatalStudents}</td>
        </tr>
        <tr>
          <td className='px-5 py-3'>Number of Students per Class</td>
          <td>{school.avgStudents}</td>
        </tr>
        <tr>
          <td className='px-5 py-3'>Fees per Term</td>
          <td>{school.termFee}</td>
        </tr>
        <tr>
          <td className='px-5 py-3'>Admission Fee</td>
          <td>{school.admissionFee}</td>
        </tr>
        <tr>
          <td className='px-5 py-3'>Rating</td>
          <td>{school.rating}</td>
        </tr>
        
      
      </tbody>
    </Table>
  
      </div>
      <i > <h3 className='text-warning mt-5 text-center'>Contact Details</h3></i>

      <div className='w-75 mt-5 ms-5 p-5 d-flex align-items-center justify-content-between '>
        <div className=' ms-5   d-flex align-items-center justify-content-between flex-column '>
        <FontAwesomeIcon icon={faEnvelope} className='mb-3' />
          {school.schoolEmail}
        </div>  
        <div className='d-flex align-items-center justify-content-between flex-column '>
        <FontAwesomeIcon icon={faPhone} className='mb-3' />
          {school.schoolPhoneNo}
        </div>    
        <div className='d-flex align-items-center justify-content-between flex-column '>
        <FontAwesomeIcon icon={faGlobe} className='mb-3' />
          {school.schoolWebsite}
        </div> 
      </div>
      <i > <h3 className='text-warning my-5 text-center'><a href={school.schoolWebsite}>Click Here To View More</a></h3></i>


    </div>}
    <div className='mx-5 mt-5'>
        <Link to={'/'} style={{ textDecoration: 'none', color: 'blue' }} >
            <h5 className='text-info'> <FontAwesomeIcon icon={faArrowLeft} className='me-3' />Back to Home </h5>
  
          </Link>  
     </div>
    <ToastContainer theme='colored'  position='top-center' autoClose={2000} />
<Footer/>
    </>
  )
}

export default SchoolDetails
