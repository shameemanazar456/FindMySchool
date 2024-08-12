import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button, FormControl, FormHelperText, InputAdornment, OutlinedInput, Stack, TextField } from '@mui/material'
import React, { useEffect } from 'react'
import SchoolList from '../../components/admincomponents/SchoolList'
import ArticlesListAdmin from '../../components/admincomponents/ArticlesListAdmin'
import VideoListAdmin from '../../components/admincomponents/VideoListAdmin'
import { Link, useNavigate } from 'react-router-dom'
import AddSchool from './AddSchool'
import Header from '../../components/Header'
import AdminHeader from '../../components/AdminHeader'
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify'
import { addArticleAPi } from '../../services/allApi'

function AddArticle() {
    const [show, setShow] = useState(true);
  const[article,setArticle] = useState({
    author:"",
    date:"",
    content:"",
    articleImage:""
  })
  const [preview,setPreview] = useState("")
  const [token,setToken] = useState("")
  const navigate = useNavigate()

  const handleClose = () =>{ setShow(false);
    setArticle({
      author:"",
    date:"",
    content:"",
    tittle:"",
    articleImage:""

    })
    navigate('/home-admin')
  }

  useEffect(()=>{
    let token = sessionStorage.getItem("token")
    if(token){
      setToken(token)
    setShow(true);}
  else{
    toast.info('Please Login')
  }
  },[])
  
  const handleSave = async (e)=>{
    e.preventDefault()
    const {author,content,articleImage, tittle} = article
    if(!author || !content || !articleImage || !tittle){
      toast.error('Please Fill the Form Completley')
    }
    else{
    const date = new Date()
    console.log(date);
    const reqBody = new FormData()
    reqBody.append("author",author)
    reqBody.append("content",content)
    reqBody.append("date",date)
    reqBody.append("articleImage",articleImage)
    reqBody.append("tittle",tittle)
    if(token){
        console.log(token);
      let reqHeader={
        "Content-Type":"multipart/form-data",
        "Authorization":`Bearer ${token}`
      }
      const result = await addArticleAPi(reqBody,reqHeader)
      //console.log(result);
      if(result.status == 200){
        toast.success('Article Added Successfully')
        setTimeout(()=>{
            navigate('/home-admin')
        },2000)
      }
      else{
        toast.error('Something Went Wrong')
      }
    }

  
    }



  }
  useEffect(()=>{
    if(article.articleImage){
      setPreview(URL.createObjectURL(article.articleImage))
    }

  },[article.articleImage])
  return (
    <>
     <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Article</Modal.Title>
        </Modal.Header>
        <Modal.Body  className='row d-flex align-items-center justify-content-center  border shadow rounded w-100 p-5'>

        
          <div className='col-md-12 d-flex align-items-center justify-content-center w-100'>
          <label htmlFor="image" className='text-center m-3'>
                        <input id='image'  type="file" style={{display:'none'}} onChange={(e)=>setArticle({...article, articleImage:e.target.files[0]})} />
                        <img src={preview?preview:'https://cdn.pixabay.com/photo/2016/01/03/00/43/upload-1118929_960_720.png'} alt=" no image" className='w-50 ' />
                      </label>
          </div>
      <div className='col-md-12'>
      <TextField id="outlined-basic" label="Tittle" value={article.tittle} variant="outlined" className='w-100 mb-3' onChange={(e)=>setArticle({...article,tittle:e.target.value})} />
          <TextField id="outlined-basic" label="Author" value={article.author} variant="outlined" className='w-100 mb-3' onChange={(e)=>setArticle({...article,author:e.target.value})} />
          <TextField  
                           id="outlined-multiline-flexible"
                          label="Content"
                          multiline
                          maxRows={100}
                          placeholder='Content'
                          className='w-100'
                          onChange={(e)=>setArticle({...article,content:e.target.value})}
                          />
         
      </div>
  
     
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSave}>
            Save 
          </Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer theme='colored'  position='top-center' autoClose={2000} />
      
    </>
  )
}

export default AddArticle
