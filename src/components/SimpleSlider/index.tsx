import Slider from "react-slick";
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./slick.scss";

interface IProps{
  children:React.ReactNode
}

export const SimpleSlider = (props:IProps) => {
    const settings = {
      dots: true,
      infinite: true,
      speed: 300,
      slidesToShow: 4,
      slidesToScroll:4,
      rows:2,
      arrows:false,
    };

    return (
      <Slider {...settings}>
        {props.children}
      </Slider>
    );
}
