import React from 'react'
import article from '../images/article.jpg'
import { Button, Card } from 'react-bootstrap'
import { serverUrl } from '../services/baseUrl'
import { Link } from 'react-router-dom'


function ArticleCard({item}) {
  return (
    <>
      <Card className='border-warning' style={{ width: '18rem', height:'24rem' }}>
      <Card.Img variant="top" src={`${serverUrl}/uploads/${item.articleImage}`} />
      <Card.Body >
        <Card.Title className='text-info text-center'>{item.tittle.slice(0,)}</Card.Title>
        <Card.Text className='text-center'>
        {item.author}
              
        </Card.Text>
        <div className='d-flex align-items-center justify-content-center'><Link to={`/article/${item._id}`}><Button  variant="info ">View</Button></Link></div>
      </Card.Body>
    </Card>
      
    </>
  )
}

export default ArticleCard
