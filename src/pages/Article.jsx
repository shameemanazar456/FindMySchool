import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { getAArticleApi } from '../services/allApi';
import Header from '../components/Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { serverUrl } from '../services/baseUrl';
import Footer from '../components/Footer';
import { ToastContainer } from 'react-bootstrap';
import { toast } from 'react-toastify';

function Article() {
  const [article, setArticle] = useState({})
  const [token,setToken] = useState(false)
  const navigate = useNavigate()

  const {id} = useParams()
  console.log(id);

  const getAArticle = async ()=>{
    let tokenVerify = sessionStorage.getItem("token")
    if(tokenVerify){
      setToken(true)
      let reqHeader={
        "Content-Type":"multipart/form-data",
        "Authorization":`Bearer ${tokenVerify}`
      }
    const result = await getAArticleApi(id,reqHeader)
    console.log(result);
    if(result.status == 200){
      setArticle(result.data)
    }
  }
  else{
    toast.error('Please Login')
    setTimeout(()=>{
      navigate('/')
    })
  }
  }
  useEffect(()=>{
    getAArticle()
  },[])
  return (
    <>
    <Header/>
    <div className=''>
        <Link to={'/'} style={{ textDecoration: 'none', color: 'blue' }} >
            <h5 className='text-info'> <FontAwesomeIcon icon={faArrowLeft} className='me-3' />Back to Home </h5>
  
          </Link>  
     </div>
 {token &&  <div>
       <div>
        <h1 className='text-center text-primary my-5 pt-5'><b>{article.tittle}</b></h1>
  
        <div className='w-100 d-flex align-items-center justify-content-center flex-column '>
    
        <img src={`${serverUrl}/uploads/${article.articleImage}`} alt="" className=' rounded shadow' style={{height:'50vh'}} />  
        <h4 className='mt-5'><i>{article.author}</i></h4>
        <h6 className='mt-2'><i>Publised On {article.date}</i></h6>
        <p className='mx-5 mt-5 px-5'>{article.content}</p>
        <p className='mx-5 px-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis delectus, ullam, dolorem voluptatibus alias eaque repudiandae fugiat ea aliquid, dolores vel! Ab commodi ad accusamus! Incidunt dolore excepturi placeat a. Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis delectus, ullam, dolorem voluptatibus alias eaque repudiandae fugiat ea aliquid, dolores vel! Ab commodi ad accusamus! Incidunt dolore excepturi placeat a</p>
  
        <p className='mx-5 px-5'>{article.content}</p>
        <p className='mx-5 px-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis delectus, ullam, dolorem voluptatibus alias eaque repudiandae fugiat ea aliquid, dolores vel! Ab commodi ad accusamus! Incidunt dolore excepturi placeat a. Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis delectus, ullam, dolorem voluptatibus alias eaque repudiandae fugiat ea aliquid, dolores vel! Ab commodi ad accusamus! Incidunt dolore excepturi placeat a</p>
  
        </div>
        </div>
   </div>}
   <div className='mb-4'>
        <Link to={'/'} style={{ textDecoration: 'none', color: 'blue' }} >
            <h5 className='text-info'> <FontAwesomeIcon icon={faArrowLeft} className='me-3' />Back to Home </h5>
  
          </Link>  
     </div>
      <Footer/>
      <ToastContainer theme='colored'  position='top-center' autoClose={2000} />

    </>
  )
}

export default Article
