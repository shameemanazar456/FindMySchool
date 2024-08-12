import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import SchoolCard from './SchoolCard'
import { getSchoolsAPi } from '../services/allApi'

function TopRatedSchools() {
  const [schools, setSchools] = useState([])
  const [topschools, setTopSchools] = useState([])

  const getSchools = async()=>{
    const result = await getSchoolsAPi("")
    //console.log(result);
    if(result.status == 200){
      //setSchools()
     // console.log(schools);
     setSchools(result.data.sort((a,b)=>(parseInt(b.rating)-parseInt(a.rating))))
     //console.log(schools);
     setTopSchools(schools.slice(0,3))
    // console.log(topschools);
    }
  }
  useEffect(()=>{
    getSchools()
  },[schools])
  return (
    <>
    <div>
        <h1 className='text-center text-danger mt-5'>Top Rated Schools</h1>
      <marquee scrollAmount={20}>
        <div className='d-flex w-100'>
       {topschools.map((item)=>( <SchoolCard item={item}/>))}
        

        </div>
      </marquee>

       
    </div>
      
    </>
  )
}

export default TopRatedSchools
