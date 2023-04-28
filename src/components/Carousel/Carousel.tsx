import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './slick.scss'

interface IProps{
  children:React.ReactNode
}

export  const Carousel = (props:IProps) => {
  const sliderSettings = {
    slidesToShow: 2,
    slidesToScroll: 2,
    rows:2,
    dots:true,
    arrows:true,
    infinite:true,
  }

  return (
    <Slider {...sliderSettings}>
      {props.children}
    </Slider>
  )
}