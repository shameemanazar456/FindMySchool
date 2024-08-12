import React, { useContext } from 'react'
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
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPowerOff } from '@fortawesome/free-solid-svg-icons';
import { isAdminLoggedInContext, isLoggedInContext } from '../context/Context';

function AdminHeader() {
    const {isLoggedIn, setIsLoggedIn} = useContext(isLoggedInContext)

  const {setIsAdminLoggedIn} = useContext(isAdminLoggedInContext)

  const navigate = useNavigate()
  const handleLogout = ()=>{
    sessionStorage.removeItem("existingUser")
    sessionStorage.removeItem("token")
    setIsAdminLoggedIn(false)
    navigate('/')

    
  }
  return (
    <>
<Navbar expand="lg" className=" w-100" style={{backgroundColor:'#EFE4F1',position:'fixed', marginTop:'-100px',zIndex:'5'}}>

<Navbar.Brand href="#home" className='ms-5 w-50'>
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
<div className='w-50'><h3 className='text-danger ms-auto'> Welcome Admin</h3></div>
  <Nav className="w-100">
    <Link style={{textDecoration:'none'}} to={'/'} ><Nav.Link >Home</Nav.Link></Link>
    <Link style={{textDecoration:'none'}} to={'/home-admin'} ><Nav.Link >Admin Home</Nav.Link></Link>
    <Link style={{textDecoration:'none'}} to={'/school'}><Nav.Link href="#link">Schools</Nav.Link></Link>
    <Link style={{textDecoration:'none'}} to={'/articleList'}><Nav.Link href="#link">Articles</Nav.Link></Link>
    <NavDropdown className='w-25' title="Add" id="basic-nav-dropdown">
   <NavDropdown.Item >  <Link style={{textDecoration:'none'}} to={'/admin-addSchool'}>School</Link></NavDropdown.Item>

    
      
        <NavDropdown.Item >
        <Link style={{textDecoration:'none'}} to={'/add-article'}>
          Articles</Link>
        </NavDropdown.Item>
      
     
    </NavDropdown>
    <Nav.Link onClick={handleLogout}  className='text-danger '><FontAwesomeIcon className="me-2" icon={faPowerOff} />LogOut</Nav.Link>

  </Nav>
</Navbar.Collapse>
</Navbar>
      
    </>
  )
}

export default AdminHeader
