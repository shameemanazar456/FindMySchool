import React, { useEffect, useState } from 'react'
import SchoolCard from './SchoolCard'
import { Button, Col, Form, Row } from 'react-bootstrap'
import { getSchoolsAPi, getSchoolsUserAPi } from '../services/allApi'

function AllAchools() {
    const [schools,setSchools] = useState([])
    const [serachKey, setSearchKey] = useState("")
    const getSchools = async()=>{
        const result = await getSchoolsUserAPi(serachKey)
        //console.log(result);
        if(result.status == 200){
          //setSchools()
         // console.log(schools);
         setSchools(result.data)
     
        }
      }
      useEffect(()=>{
        getSchools()
      },[schools,serachKey])
  return (

    <div>
        <h1 className='text-center text-danger'>Schools</h1>
        <div className='d-flex align-items-center justify-content-center mt-5'>
          <Form inline className='me-5 d-flex'>
                <Row>
                  <Col xs="auto" className='d-flex' >
                    <Form.Control
                      type="text"
                      placeholder="Loaction/SchoolName"
                      onChange={(e)=>{setSearchKey(e.target.value)}}
                      className=" mr-sm-3 me-2 w-100"
                    />
              <Button type="submit" className='rounded'>Search</Button>
  
                  </Col>
                 
                </Row>
              </Form>
        </div>
         <Row className='my-5 mx-3  '>
        
                {schools.map((item)=>(
                    <Col md={4} sm={12} lg={4}>
                <SchoolCard item={item}/>
                
                </Col>))}
                
            
        </Row> 
      
    </div>
  )
}

export default AllAchools
