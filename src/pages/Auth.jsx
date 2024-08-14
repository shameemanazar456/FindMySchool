import { faArrowLeft, faL } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useContext, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import login from '../images/login.png'
import { Link, useNavigate } from 'react-router-dom';
import { loginApi, registerUserApi } from '../services/allApi';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { isAdminLoggedInContext, isLoggedInContext } from '../context/Context';

function Auth({registerFor}) {

  const {setIsLoggedIn} = useContext(isLoggedInContext)
  const {setIsAdminLoggedIn} = useContext(isAdminLoggedInContext)


  const navigate = useNavigate()


  const register = registerFor?false:true

  //console.log(register);

  const [userDetails, setUserDetails]=useState({
    username:"",
    email:"",
    password:""
  })
  console.log(userDetails);
  const[ isEmail, setIsEmail] = useState(true)
  const [isuname, setIsuname]= useState(true)
  const [isPassword, setIspassword]= useState(true)


  const validateInput=(e)=>{
    const {name,value}=e.target
   // console.log(name,value);
   if(name=='email'){
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    setIsEmail(regex.test(value))
    console.log(regex.test(value));
    setUserDetails({...userDetails, email:value})
    
   }
   else if(name=='uname'){
    const regex = /^[a-zA-Z0-9 ]{3,}$/;
    setIsuname(regex.test(value))
    setUserDetails({...userDetails, username:value})

    
   }
   else{
    const regex = /^[a-zA-Z0-9 ]{5,}$/;
    setIspassword(regex.test(value))
    setUserDetails({...userDetails, password:value})

   
   }
  }

  const handleRegister=async()=>{
    const {username, email, password} = userDetails
    if(!isEmail || !isPassword || !isuname || username=="" || password =="" || email=="" ){
      alert('Plaese fill the form completley')
    }
    else{
      const response = await registerUserApi((userDetails))
      console.log(response);
      if(response.status == 200){
        setUserDetails({
          username :"",
          email:"",
          password:""
        })
        alert('Registertion Successfull')
        navigate('/login')
      }
      else{
        alert('Somthing Went Wrong')
      }

    }

  }

  const handleLogin = async (e)=>{
    e.preventDefault()
    const {email, password} = userDetails

    const loginDetails = {
      email,password
    }
    if(!isEmail || !isPassword || email =="" || password==""){
      toast.info('Plaese Fill the Form Completley')
    }
    else{
      const result = await loginApi(loginDetails)
      console.log(result.data);
      const loginuser = result.data.existingUser
      if(result.status == 200){
        toast.success('Login Successfull')
        setIsLoggedIn(true)
        console.log(result.data.token);
        sessionStorage.setItem("existingUser",JSON.stringify(loginuser))
        sessionStorage.setItem("token",result.data.token)
        setUserDetails({
          username:"",
          password:"",  
          email:""
        })
       setTimeout(() => {
        if(loginuser.email=="admin@gmail.com")
       { 
        setIsAdminLoggedIn(true)

        navigate('/home-admin')
       }
        else{
          navigate('/')
        }

       }, 2000);
      }
      else{
        toast.error('error')
        setIsLoggedIn(false)

      }
    }

    

  }

  
  
  return (
  <>
     <div className='mx-5 mt-5'>
        <Link to={'/'} style={{ textDecoration: 'none', color: 'blue' }} >
            <h5 className='text-info'> <FontAwesomeIcon icon={faArrowLeft} className='me-3' />Back to Home </h5>
  
          </Link>  
     </div>
     <div className='d-flex align-items-center justify-content-center rounded w-100'>
       
        <div className='row m-4 p-3 rounded shadow' style={{ width:'800px',backgroundColor:'#989CEC'}}>
         {register&& <h3 className='text-center fw-bold text-light'>Login Form</h3>}
         {!register&& <h3 className='text-center fw-bold text-light'>Register Form</h3>}

          <div className='col-md-6 my-4 '>
            <img src={login} alt="" style={{height:'50vh'}} />
          </div>
          <div className='col-md-6 ' >
             <Form className='d-flex align-items-center justify-content-center flex-column' style={{height:'65vh'}}>
            <Form.Group className="mb-3 w-75" controlId="formBasicEmail" >
              <Form.Label className='text-light'>Email address</Form.Label>
              <Form.Control type="email" name='email' placeholder="Enter email " value={userDetails.email} onChange={(e)=>validateInput(e)} />
             {!isEmail && !register &&<span className='text-danger ms-2'>*Invalid Input</span>}
            </Form.Group>
            
            {!register&&
            <Form.Group className="mb-3 w-75" controlId="formBasicEmail">
              <Form.Label className='text-light'>User Name</Form.Label>
              <Form.Control name='uname' type="text" placeholder="Enter Username" value={userDetails.username} onChange={(e)=>validateInput(e)} />
              {!isuname &&<span className='text-danger ms-2'>*Invalid Input</span>}

            </Form.Group>}
      
            <Form.Group className="mb-4 w-75" controlId="formBasicPassword">
              <Form.Label className='text-light'>Password</Form.Label>
              <Form.Control name='upswd' type="password" placeholder="Password" value={userDetails.password} onChange={(e)=>validateInput(e)} />
              {!isPassword && !register &&<span className='text-danger ms-2'>*Invalid Input</span>}

            </Form.Group>
            
           {register &&  <Button variant="primary" type="button" onClick={handleLogin}>
              Login
            </Button> }
            {!register && <Button variant="primary" onClick={handleRegister} type="button">
              Register
            </Button>}
           {!register && <p className='text-light mt-3'>Already Registered? <Link to={'/login'} className='text-danger' style={{textDecoration:'none'}} >Login Here.</Link></p>}
            {register &&<p className='text-light mt-3'>Don't have an Account? <Link to={'/register'} className='text-danger' style={{textDecoration:'none'}} >Register Here.</Link></p>}

          </Form>
          </div>
        </div>
     </div>
     <ToastContainer theme="colored" position='top-center' autoClose={2000} />
  </>      
  )
}

export default Auth
