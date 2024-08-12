import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage1 from '../images/caroselimage1.jpg';
import ExampleCarouselImage2 from '../images/caroselimage2.jpg';
import ExampleCarouselImage3 from '../images/caroselimage3.jpg';
import ExampleCarouselImage4 from '../images/caroselimage4.jpg';
import ExampleCarouselImage5 from '../images/caroselimage5.jpg';




function Hero() {
  return (
    
      <div id='#home' className='d-flex align-items-center justify-content-center mt-5  pt-5' style={{height:'85vh',width:'100%'}}>
          <Carousel className='w-100 mt-5'   >
          <Carousel.Item>
            <img src={ExampleCarouselImage1} className='w-100' style={{height:'70vh'}} text="First slide" />
            <Carousel.Caption>
            
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
          <img src={ExampleCarouselImage2} className='w-100' style={{height:'70vh'}} text="First slide" />
           
            <div className='d-flex align-items-center justify-content-center flex-column'>
                <h3 className='mt-3 text-primary'><b>Location</b></h3>
                <p className='mb-2'>Choose a School which is near to you</p>
            </div>
           
          </Carousel.Item>
          <Carousel.Item>
          <img src={ExampleCarouselImage3} className='w-100' style={{height:'70vh'}} text="First slide" />
          <div className='d-flex align-items-center justify-content-center flex-column'>
                <h3 className='mt-3 text-primary'><b>Teacher Student Ratio</b></h3>
                <p className='mb-2'>Consider the number of students in a class</p>
            </div>
           
          </Carousel.Item>
          <Carousel.Item>
          <img src={ExampleCarouselImage4} className='w-100' style={{height:'70vh'}} text="First slide" />
          <div className='d-flex align-items-center justify-content-center flex-column'>
                <h3 className='mt-3 text-primary'><b>Education and Curriculam</b></h3>
                <p className='mb-2'>Choose the system based on your child's capability</p>
            </div>
          </Carousel.Item>
          <Carousel.Item>
          <img src={ExampleCarouselImage5} className='w-100' style={{height:'70vh'}} text="First slide" />
          <div className='d-flex align-items-center justify-content-center flex-column'>
                <h3 className='mt-3 text-primary'><b>Budget</b></h3>
                <p className='mb-2'>Consider the school fees and other school expenses meet your budget</p>
            </div>
  
          </Carousel.Item>
        </Carousel>
      </div>
 
    
  )
}

export default Hero
