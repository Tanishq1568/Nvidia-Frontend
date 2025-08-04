import React, { useRef, useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import "../css/Container1.css";

import img1 from "../images/im1.webp";
import img2 from "../images/im2.webp";
import img3 from "../images/im3.webp";
import img4 from "../images/im4.webp";
import img5 from "../images/im5.webp";
import img6 from "../images/im6.webp";
import img7 from "../images/im7.webp";
import img8 from "../images/im8.webp";
import img9 from "../images/im9.webp";
import img10 from "../images/im10.webp";


import new_image1 from "../images/new1.jpg";
import new_image2 from "../images/new2.jpg";

import '../css/Home.css';

function HomeProduct() {
  const scrollRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const productImages = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];

  const cards = productImages.map((image, i) => ({
    id: i,
    title: `Product ${i + 1}`,
    description: 'This is a sample product description.',
    image,
  }));

  const scrollToCard = (index) => {
    const container = scrollRef.current;
    if (container) {
      const cardWidth = container.firstChild?.offsetWidth + 16; // 16px gap (gap-4 = 1rem)
      container.scrollTo({
        left: index * cardWidth,
        behavior: 'smooth',
      });
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (currentIndex + 1) % cards.length;
      setCurrentIndex(nextIndex);
      scrollToCard(nextIndex);
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <>
      <div className="container py-5">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h3 className="m-0">Our Products</h3>
        </div>

        <div style={{ maxWidth: '80rem', margin: '0 auto' }}>
          <div
            ref={scrollRef}
            className="d-flex hide-scrollbar gap-4 px-3 pb-4"
            style={{
              overflowX: 'auto',
              scrollSnapType: 'x mandatory',
              scrollBehavior: 'smooth',
            }}
          >
            {cards.map((card) => (
              <div
                key={card.id}
                className="card shadow"
                style={{
                  minWidth: '18rem',
                  maxWidth: '18rem',
                  height: '440px',
                  scrollSnapAlign: 'start',
                  flex: '0 0 auto',
                }}
              >
                <img
                  src={card.image}
                  className="card-img-top"
                  alt={card.title}
                  style={{
                    height: '220px',
                    objectFit: 'contain',
                    padding: '0.5rem',
                  }}
                />
                <div className="card-body d-flex flex-column justify-content-between">
                  <div>
                    <h5 className="card-title">{card.title}</h5>
                    <p className="card-text" style={{ fontSize: '0.95rem' }}>
                      {card.description}
                    </p>
                  </div>
                  <div className="d-flex justify-content-between gap-2 mt-3">
                    <button className="btn btn-primary w-50">Buy Now</button>
                    <button className="btn btn-outline-primary w-50">Add to Cart</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Banners */}
      <div className="container my-5">
        <div className="row g-4">
          <div className="col-md-6">
            <div className="position-relative">
              <img
                src={new_image1}
                alt="Banner 1"
                className="img-fluid w-100"
                style={{ height: '300px', objectFit: 'cover' }}
              />
              <div
                className="position-absolute top-50 start-0 translate-middle-y text-white text-start ps-4"
                style={{ zIndex: 2 }}
              >
                <h3 className="fw-bold">Gaming </h3>
                <p>Level up your gaming experience with RTX.</p>
                <button className="btn btn-primary w-60">Shop Now</button>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="position-relative">
              <img
                src={new_image2}
                alt="Banner 2"
                className="img-fluid w-100"
                style={{ height: '300px', objectFit: 'cover' }}
              />
              <div
                className="position-absolute top-50 start-0 translate-middle-y text-white text-start ps-4"
                style={{ zIndex: 2 }}
              >
                <h4 className="fw-bold">GeForce RTX 50<br /> Series Laptops</h4>
                <p>Powered by NVIDIA </p>
                <button className="btn btn-primary w-60">Shop Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeProduct;
