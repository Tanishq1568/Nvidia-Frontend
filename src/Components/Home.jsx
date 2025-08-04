import React from 'react';
import { Carousel } from 'rsuite';
import 'rsuite/dist/rsuite.min.css';
import img1 from "../images/caro1.jpg";
import img2 from "../images/caro2.jpg";
import img3 from "../images/caro3.jpg";
import img4 from "../images/caro4.jpg";
import '../css/Home.css';
import { Outlet } from 'react-router-dom';

function Home() {
  const slides = [
    { image: img1, text: "Explore the World" },
    { image: img2, text: "Discover New Places" },
    { image: img3, text: "Adventure Awaits" },
    { image: img4, text: "Unleash Your Wanderlust" }
  ];

  return (
    <div style={{ paddingTop: '110px' }}>
      <Carousel
        autoplay
        className="custom-slider"
        style={{
          width: '95%',
          height: '700px',
          margin: '40px auto',
        }}
        
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="carousel-background"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="overlay-content">
              <h1 className="overlay-heading">{slide.text}</h1>
              <button className="shop-button">Shop Now</button>
            </div>
          </div>
        ))}
      </Carousel>
      <Outlet/>
    </div>
  );
}

export default Home;
