import React, { useContext, useState } from 'react'
import HeroSlider, {Slider} from 'hero-slider/dist/HeroSlider';
import img1 from '../../../assets/slider/1675866858.jpg';
import { Carousel } from 'react-bootstrap';
import ExampleCarouselImage from './ExampleCarouselImage';
import { AuthContext } from '../../../Context/ContextProvider';
export default function Carouse() {
    const {slider} = useContext(AuthContext)
    const [index, setIndex] = useState(0)

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
      };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      
        {
            slider.map((sliderItem, idx) => <Carousel.Item key={idx}>
            <ExampleCarouselImage  sliderimg={sliderItem.slider_img} />
            </Carousel.Item>)
        }
      
    </Carousel>

  )
}
