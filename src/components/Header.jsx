import React, { useContext, useEffect } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../images/logo.png'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link, useNavigate } from 'react-router-dom';
import { isAdminLoggedInContext, isLoggedInContext } from '../context/Context';
import { toast, ToastContainer } from 'react-toastify';
import { faL } from '@fortawesome/free-solid-svg-icons';


function Header() {
  const {isLoggedIn, setIsLoggedIn} = useContext(isLoggedInContext)
  const {isAdminLoggedIn} = useContext(isAdminLoggedInContext)

  const navigate = useNavigate()

  const handleLOgOut = ()=>{
    sessionStorage.removeItem("existingUser")
    sessionStorage.removeItem("token")
    setIsLoggedIn(false)
    toast.warning('LogOut Succssfully')
      setTimeout(()=>{
        navigate('/')
      },2000)
    
  }
  useEffect(()=>{
    if(sessionStorage.getItem("token")){
      setIsLoggedIn(true)
    }
    else{
      setIsLoggedIn(false)
    }

  },[isLoggedIn])
  return (
    <div >
      <Navbar expand="lg" className="w-100" style={{backgroundColor:'#EFE4F1', position:'fixed', zIndex:'5', marginTop:'0px', paddingTop:'0px'}}>

        <Navbar.Brand href="#home" className='ms-5'>
          <img
            alt=""
            src={logo}
            width="50"
            height="50"
            className="d-inline-block align-center"
          />{' '}
          Find My <span className='text-danger'>School</span>
        </Navbar.Brand>        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className=' w-100'>
          <Nav className="ms-auto">
            <Link to={'/' }  className='mt-2  me-3' style={{textDecoration:'none'}}>Home</Link>
            <Nav.Link >Schools</Nav.Link>
            <Nav.Link >Articles</Nav.Link>
{ isAdminLoggedIn &&           <Link to={'/home-admin' }  className='mt-2  me-3' style={{textDecoration:'none'}}>Admin Home</Link>
}

            
          <div className='me-5 ms-5 d-flex'>
{   !isLoggedIn      &&    <Link  style={{textDecoration:'none'}} to={'/login'}> <Nav.Link href="#link"><button className='btn btn-outline-info'>Login</button></Nav.Link></Link>
}            
{ isLoggedIn && <button className='btn btn-outline-warning' onClick={handleLOgOut}>LogOut</button>
}          </div>


          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <ToastContainer theme='colored'  position='top-center' autoClose={2000} />


    </div>
  )
}

export default Header
