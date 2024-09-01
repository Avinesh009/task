import React from 'react'
import carouselpic from './images/carousel1.jpg'
import './Carousel.css'

function Carousel() {

    const elements = [
        {
            img:carouselpic,
            text:"Empowering Financial Security for Everyone",
            subtext:"We are committed to provividing accessible and reliable financial services to help individuals and families"
        }
    ]
  return (
    <div className='carousel'>
      {
        elements.map((item,i)=>{
            return(
                <div>
                <img className='carousel-image' src={item.img} alt='carousel image'> 
                </img>
                <h3 className='heading'>{item.text}</h3>
                <p className='sub-heading'>{item.subtext}</p>
                </div>
            )
        })
      }
    </div>
  )
}

export default Carousel
