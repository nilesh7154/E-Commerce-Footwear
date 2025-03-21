import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "../Footer/Footer";
import "./Home.css";  // Import the Home.css for styling
import Navlink from "./Navlink";

let carouselData = [
  { id: 1, img: "/Images/img.jpg" },
  { id: 2, img: "/Images/img1.jpg" },
  { id: 3, img: "/Images/img2.jpg" },
  { id: 4, img: "/Images/img3.jpg" },
];

let sdata=[
  { id: 1, img: "/Images/shoe.jpg" },
  { id: 2, img: "/Images/shoe1.jpg" },
  { id: 3, img: "/Images/shoe2.jpg" },
  { id: 4, img: "/Images/shoe3.jpg" },
  { id: 4, img: "/Images/shoe4.jpg" },

]

function Home({ showImage }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024, // Tablet or smaller
        settings: {
          slidesToShow: 1, // Keep it single image in the slider even on tablets
        },
      },
      {
        breakpoint: 640, // Mobile
        settings: {
          slidesToShow: 1, // Keep it single image on mobile as well
        },
      },
    ],
  };

  return (
    <div className="home-container">
      {/* Navbar */}
      <Navlink/>

      {/* Carousel */}
      {showImage && (
        <div className="carousel-container">
          <Slider {...settings}>
            {carouselData.map((slide) => (
              <div key={slide.id} className="carousel-slide">
                <img
                  src={slide.img}
                  alt="banner"
                  className="carousel-img"
                />
              </div>
            ))}
          </Slider>
          <div className="cardslide">

            <div className="cardimg">
              
            </div>


          </div>
        </div>
      )}

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Home;
