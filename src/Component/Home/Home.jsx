import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import Slider from "react-slick";
// import Footer from '../Footer/Footer';

let carouselData = [
  { id: 1, img: "/Images/img.jpg" },
  { id: 2, img: "/Images/img1.jpg" },
  { id: 3, img: "/Images/img2.jpg" },
  { id: 4, img: "/Images/img.jpg" },
];

function Home({ showImage }) {

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
  };

  console.log(carouselData,"log");
  

  return (
    <div className="main" id="Home">
      <div className="home">
        <ul className="Categories">
          <li>
            <Link to="/sale">Sale</Link>
          </li>
          <li>
            <Link to="/new">New Arrival</Link>
          </li>
          <li>
            <Link to="/men">Men</Link>
          </li>
          <li>
            <Link to="/women">Women</Link>
          </li>
          <li>
            <Link to="/kids">Kids</Link>
          </li>
          <li>
            <Link to="/trending">Trending</Link>
          </li>
        </ul>
      </div>

      {showImage && (
        <div className="w-full max-w-[1400px] mx-auto px-4 ">
          <Slider {...settings}>
            {carouselData.map((slide) => (
              <div key={slide.id} className="w-full"  >
                <img src={slide.img} alt="Banner" className="w-full h-[600px] object-cover rounded-lg"/>
              </div>
            ))}
          </Slider>
          
        </div>
        
      )}
    </div>
  );
}

export default Home;
