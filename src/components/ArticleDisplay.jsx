import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import ArticleCard from './ArticleCard'
import { getArticlesAPi } from '../services/allApi'

function ArticleDisplay() {

  const [articles,setArticles] = useState([])
  

  const getArticles = async()=>{
    const result = await getArticlesAPi("")
    console.log(result);
    if(result.status == 200){
      setArticles(result.data)
    }
    
  }
  useEffect(()=>{
    getArticles()
  },[])
  return (
    
    <div>
    <h1 className='text-center text-danger mt-5'>Articles</h1>
    <Row className='m-5'>
            
               {articles.map((item)=>( <Col md={4} sm={12} lg={3}>
                <ArticleCard item={item}/>
                
                </Col>))}
               
                
        
        </Row>
    </div>

      
    
  )
}

export default ArticleDisplay
