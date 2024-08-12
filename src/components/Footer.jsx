import React from 'react'
import { Col, Row } from 'react-bootstrap'
import logo from '../images/logo.png'
import { Link } from 'react-router-dom'


function Footer() {
  return (
    <>
      <Row className="w-100" style={{ backgroundColor: '#EFE4F1' }}>
        <Col md={2} className='mt-5 ms-5'>

          <div>
            <img src={logo} alt="" style={{ height: '150px' }} />
          </div>


        </Col>
        <Col md={3} className='mt-5 pt-5'>

          <div className=' '>
            <p>Find My School is a website that allows users to view different schools details. Users can view complete school details</p>
          </div>


        </Col>
        <Col md={2} className='m-2'>

          <div className=' '>
            <h4 className='text-primary mt-5 mb-4 ' >Links</h4>
            <Link style={{ textDecoration: 'none' }} to={'/login'}> <h6 className='text-info mb-3'>Login</h6></Link>
            <Link style={{ textDecoration: 'none' }} to={'/register'}> <h6 className='text-info mb-3'>Register</h6></Link>
            <Link style={{ textDecoration: 'none' }} to={'/school'}> <h6 className='text-info mb-3'>Schools</h6></Link>
          </div>
        </Col>
        <Col md={2} className='m-2'>

          <div className=' '>
            <h4 className='text-primary mt-5 mb-4 ' >About</h4>
            <Link style={{ textDecoration: 'none' }} to={'/login'}> <h6 className='text-info mb-3'>Privacy Policy</h6></Link>
            <Link style={{ textDecoration: 'none' }} to={'/register'}> <h6 className='text-info mb-3'>AboutUs</h6></Link>
            <Link style={{ textDecoration: 'none' }} to={'/school'}> <h6 className='text-info mb-3'>Terms of Use</h6></Link>



          </div>


        </Col>
        <Col md={2} className='m-2'>

<div className=' '>
  <h4 className='text-primary mt-5 mb-4 ' >Contact Us</h4>
  <form action="">
    <input className='form-control' type="text" placeholder='Enter Email' />
    <button className='btn btn-warning mt-2 ms-5'>Subscribe</button>
  </form>
</div>
</Col>
      </Row>

    </>
  )
}

export default Footer
