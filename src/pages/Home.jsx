import React from 'react'
import Hero from '../components/Hero'
import { Col, Row } from 'react-bootstrap'
import TopRatedSchools from '../components/TopRatedSchools'
import ArticleDisplay from '../components/ArticleDisplay'
import Header from '../components/Header'
import Footer from '../components/Footer'
import AllAchools from '../components/AllAchools'

function Home() {
  return (
    <>
    <Header/>
     <Row>
      <Col md={2}></Col>
      <Col md={8}>
      <Hero/> 
      </Col>
      <Col md={2}></Col>
      </Row>
      <TopRatedSchools/>
      <AllAchools/>
      <ArticleDisplay/>
    <Footer/>
    </>
  )
}

export default Home
