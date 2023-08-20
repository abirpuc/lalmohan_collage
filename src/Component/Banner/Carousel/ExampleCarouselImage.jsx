import React, { useState } from 'react'

export default function ExampleCarouselImage({sliderimg}) {
    
    
  return (
        <img className='d-block img-fluid' style={{width:"98%", height:"400px"}} src={`src/assets/slider/${sliderimg}`} alt="" />
  )
}
