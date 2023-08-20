import React, { useState } from 'react'

export default function ExampleCarouselImage({sliderimg}) {
    
    
  return (
        <img className='d-block' style={{width:"98%", height:"400px"}} src={`src/assets/slider/${sliderimg}`} alt="" />
  )
}
