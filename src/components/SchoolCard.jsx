import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import School from '../images/Cohin Internationa School.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfStroke } from '@fortawesome/free-solid-svg-icons';
import { serverUrl } from '../services/baseUrl';
import { Link } from 'react-router-dom';

function SchoolCard({item}) {
  const [school,setSchools] = useState({})
  const [rating,setRating] = useState("")
  const [five, setFive] = useState(false)
  const [four,setFour] = useState(false)
  useEffect(()=>{
    const {rating} = item
    if(rating == '5'){
      setFive(true)
    }
    else{
      setFour(true)
    }
  },[])

  return (
    <div className='m-md-5 m-sm-2 p-3 border rounded shadow'>
     <Card className='border-warning' style={{ width: '18rem', height:'22rem' }}>
      <Card.Img variant="top" src={`${serverUrl}/uploads/${item.schoolImage}`} style={{height:'150px'}} />
      <Card.Body >
        <Card.Title className='text-info d-flex justify-content-center'><span className='text-center'>{item.schoolName}</span></Card.Title>
        <Card.Text className='text-center'>
        {item.schoolLocation.slice(0,25)}
        <div>{item.TotalRating} Reviews
          {four && <div >
            <FontAwesomeIcon icon={faStar} style={{color: "#FFD43B",}} />
            <FontAwesomeIcon icon={faStar} style={{color: "#FFD43B",}} />
            <FontAwesomeIcon icon={faStar} style={{color: "#FFD43B",}} />
            <FontAwesomeIcon icon={faStar} style={{color: "#FFD43B",}} />
            <FontAwesomeIcon icon={faStarHalfStroke} style={{color: "#FFD43B",}} />
          </div>}
          {five && <div >
            <FontAwesomeIcon icon={faStar} style={{color: "#FFD43B",}} />
            <FontAwesomeIcon icon={faStar} style={{color: "#FFD43B",}} />
            <FontAwesomeIcon icon={faStar} style={{color: "#FFD43B",}} />
            <FontAwesomeIcon icon={faStar} style={{color: "#FFD43B",}} />
            <FontAwesomeIcon icon={faStar} style={{color: "#FFD43B",}} />
          </div>}
        </div>        
        </Card.Text>
        <div className='d-flex align-items-center justify-content-center'>
          <Link to={`/schoolDetails/${item._id}`}><Button   variant="info">View</Button></Link></div>
      </Card.Body>
    </Card>
      
    </div>
  )
}

export default SchoolCard
          
