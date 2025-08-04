// src/components/GamingMonitorSlider.jsx
import React, { useEffect, useRef, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import monitor1 from '../images/monitor1.jpg';
import monitor2 from '../images/monitor2.jpg';
import monitor3 from '../images/monitor3.jpg';
import monitor4 from '../images/monitor4.jpg';
import monitor5 from '../images/monitor5.jpg';
import monitor6 from '../images/monitor6.jpg';
import monitor7 from '../images/monitor7.jpg';
import monitor8 from '../images/monitor8.jpg';
import monitor9 from '../images/monitor9.jpg';
import monitor10 from '../images/monitor10.jpg';
import monitor11 from '../images/monitor11.jpg';
import monitor12 from '../images/monitor12.jpg';
import monitor13 from '../images/monitor13.jpg';
import monitor14 from '../images/monitor14.jpg';
import monitor15 from '../images/monitor15.jpg';

const GamingMonitorSlider = () => {
  const scrollRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const monitors = [
    { id: 1, name: 'Acer Predator XB273', price: '₹32,999', image: monitor1, features: ['27" FHD IPS', '144Hz', '1ms', 'G-SYNC'] },
    { id: 2, name: 'ASUS ROG Strix XG27AQ', price: '₹49,990', image: monitor2, features: ['27" QHD IPS', '170Hz', 'HDR400', 'ELMB Sync'] },
    { id: 3, name: 'LG UltraGear 27GN950', price: '₹59,990', image: monitor3, features: ['27" 4K IPS', '144Hz', 'HDR600', '1ms GtG'] },
    { id: 4, name: 'MSI Optix MAG274QRF', price: '₹34,500', image: monitor4, features: ['27" QHD IPS', '165Hz', '1ms', 'G-SYNC'] },
    { id: 5, name: 'BenQ EX2780Q', price: '₹29,999', image: monitor5, features: ['27" QHD IPS', '144Hz', 'HDRi', 'FreeSync'] },
    { id: 6, name: 'Samsung Odyssey G7', price: '₹52,000', image: monitor6, features: ['32" QHD VA', '240Hz', '1000R Curve', 'G-SYNC'] },
    { id: 7, name: 'Gigabyte M32Q', price: '₹37,990', image: monitor7, features: ['32" QHD IPS', '165Hz', 'KVM', 'HDR400'] },
    { id: 8, name: 'Dell Alienware AW2521HF', price: '₹39,499', image: monitor8, features: ['25" FHD IPS', '240Hz', '1ms', 'AMD FreeSync'] },
    { id: 9, name: 'ViewSonic Elite XG270', price: '₹33,990', image: monitor9, features: ['27" FHD IPS', '240Hz', 'HDR10', 'PureXP'] },
    { id: 10, name: 'AOC CQ32G1', price: '₹28,000', image: monitor10, features: ['32" QHD VA', '144Hz', 'Curved', 'FreeSync'] },
    { id: 11, name: 'Zebronics A27UHD', price: '₹21,990', image: monitor11, features: ['27" 4K UHD', '60Hz', 'IPS Panel', 'HDMI/DP'] },
    { id: 12, name: 'Lenovo Legion Y25-25', price: '₹29,499', image: monitor12, features: ['25" FHD IPS', '240Hz', '1ms', 'NVIDIA G-SYNC'] },
    { id: 13, name: 'HP X24c', price: '₹18,999', image: monitor13, features: ['24" FHD VA', '144Hz', 'Curved', 'AMD FreeSync'] },
    { id: 14, name: 'INNOCN 27G1R', price: '₹24,990', image: monitor14, features: ['27" QHD IPS', '165Hz', 'HDR', '1ms'] },
    { id: 15, name: 'Cooler Master GM27-CFX', price: '₹34,490', image: monitor15, features: ['27" FHD VA', '240Hz', 'Curved', '1ms'] }
  ];

  const scrollToCard = (index) => {
    const container = scrollRef.current;
    if (container) {
      const cardWidth = container.firstChild?.offsetWidth + 16;
      container.scrollTo({
        left: index * cardWidth,
        behavior: 'smooth',
      });
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (currentIndex + 1) % monitors.length;
      setCurrentIndex(nextIndex);
      scrollToCard(nextIndex);
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="container py-5" style={{ marginTop: '100px', marginLeft: 'auto', marginRight: 'auto' }}>

      <div className="d-flex justify-content-between align-items-center mb-4">
        <h3 className="m-0">🔥 Best Gaming Monitors</h3>
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
          {monitors.map((monitor) => (
            <div
              key={monitor.id}
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
                src={monitor.image}
                className="card-img-top"
                alt={monitor.name}
                style={{
                  height: '220px',
                  objectFit: 'contain',
                  padding: '0.5rem',
                }}
              />
              <div className="card-body d-flex flex-column justify-content-between">
                <div>
                  <h5 className="card-title">{monitor.name}</h5>
                  <h6 className="text-success">{monitor.price}</h6>
                  <ul className="list-unstyled small mb-0">
                    {monitor.features.map((feature, index) => (
                      <li key={index}>• {feature}</li>
                    ))}
                  </ul>
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
  );
};

export default GamingMonitorSlider;
