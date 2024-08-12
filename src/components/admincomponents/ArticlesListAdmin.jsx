import React, { useEffect, useState } from 'react'

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button, FormControl, InputAdornment, OutlinedInput } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faPenNib, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { deleteArticleApi, getArticlesAPi } from '../../services/allApi';
import { toast, ToastContainer } from 'react-toastify';

function ArticlesListAdmin() {
  const [articles, setArticles] = useState([])
  const [searchkey, setSearchKey] = useState("")
  const getAllArticles = async ()=>{
    let token = sessionStorage.getItem("token")
      if(token){
        const result = await getArticlesAPi(searchkey)
        //console.log(result);

        if(result.status == 200){
          setArticles(result.data)
          //console.log(articles);
        }

      }
    
  }
  const handleDelete=async(id)=>{
    console.log(id);
    const token = sessionStorage.getItem("token")
    if(token){
      let reqHeader={
        "Content-Type":"multipart/form-data",
        "Authorization":`Bearer ${token}`
      }
    const result = await deleteArticleApi(id,reqHeader)
   // console.log(result);
    if(result.status == 200){
      getAllArticles()
      toast.success('Article Deleted Successfully')

    }
    }

  }
  useEffect(()=>{
    getAllArticles()
  },[searchkey])
  return (
    <div className='d-flex align-items-center justify-content-center shadow mt-5 p-3 flex-column'>
<div className='d-flex justify-content-between w-100 mt-5'>
  <h3 className='text-danger'><b>Articles</b></h3>
  <Button variant="contained" ><Link to={'/add-article'} style={{textDecoration:'none', color:'white'}}>Add Article</Link></Button>
</div>
      <div> 
        <FormControl sx={{ m: 5, width: '27ch' }} variant="outlined">
          <OutlinedInput
            id="outlined-adornment-weight"
            placeholder='Enter Article Name'
            className=''
            onChange={(e)=>setSearchKey(e.target.value)}
            endAdornment={<InputAdornment position="end"><FontAwesomeIcon icon={faMagnifyingGlass} /></InputAdornment>}                     
          />
        </FormControl>
        </div>
    <TableContainer component={Paper}>
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell className='text-danger'><b>Author</b></TableCell>
          <TableCell align="center" className='text-danger'><b>Article Name</b></TableCell>
          <TableCell align="center">Actions</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        
          {articles.map((item)=>(<TableRow
            key='1'
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell component="th" scope="row">
              {item.author}
            </TableCell>
            <TableCell align="center">{item.tittle}</TableCell>
            <TableCell align="center" >
                 
                <button className='btn btn-danger' onClick={()=>handleDelete(item._id)} ><FontAwesomeIcon icon={faTrash
                }  /></button>
                </TableCell>
          </TableRow>))}
        
      </TableBody>
      
    </Table>
  </TableContainer>
  <ToastContainer theme='colored'  position='top-center' autoClose={2000} />

  </div>
  )
}

export default ArticlesListAdmin
