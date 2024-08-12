import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Auth from './pages/Auth'
import UserHome from './pages/UserHome'
import SchoolDetails from './pages/SchoolDetails'
import School from './pages/School'
import Footer from './components/Footer'
import ArticleList from './pages/ArticleList'
import Article from './pages/Article'
import AdminHome from './pages/admin/AdminHome'
import AddSchool from './pages/admin/AddSchool'
import SchoolBasic from './components/admincomponents/SchoolBasic'
import AddArticle from './pages/admin/AddArticle'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
     
      <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/login' element={<Auth/>}></Route>
          <Route path='/register' element={<Auth registerFor/>}></Route>
          <Route path='/user-home' element={<UserHome/>}></Route>
          <Route path='/schoolDetails/:id' element={<SchoolDetails/>}></Route>
          <Route path='/school' element={<School/>}></Route>
          <Route path='/articleList' element={<ArticleList/>}></Route>
          <Route path='/article/:id' element={<Article/>}></Route>
          <Route path='/home-admin' element={<AdminHome/>}></Route>
          <Route path='/admin-addSchool' element={<AddSchool/>}></Route>
          <Route path='/admin-editSchool/:id' element={<SchoolBasic/>}></Route>
          <Route path='/add-article' element={<AddArticle/>}></Route>
      </Routes>
     
    </>
  )
}

export default App
