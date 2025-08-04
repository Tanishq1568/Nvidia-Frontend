import React from 'react';
import img1 from "../images/im1.webp";
import img2 from "../images/im2.webp";
import img3 from "../images/im3.webp";
import img4 from "../images/im4.webp";
import { Card, TagGroup, Tag } from 'rsuite';
import 'rsuite/dist/rsuite.min.css';
import '../css/Container1.css'; 

function Container1() {
  const cards = [
    {
      id: 1,
      title: 'Shadow',
      image: img1,
      description: 'A spirited little explorer with a heart full of adventure!',
    },
    {
      id: 2,
      title: 'Bella',
      image: img2,
      description: 'Bella enjoys peaceful mornings and chasing butterflies.',
    },
    {
      id: 3,
      title: 'Max',
      image: img3,
      description: 'Max is always ready to play fetch and loves snacks.',
    },
    {
      id: 4,
      title: 'Luna',
      image: img4,
      description: 'Luna finds joy in every sunrise and muddy puddle.',
    },
    {
      id: 5,
      title: 'Luna',
      image: img4,
      description: 'Luna finds joy in every sunrise and muddy puddle.',
    },
  ];

  return (<>

  <div className='container-h1'><h1>Latest Nvidia Laptops</h1></div>
    
    <div className="container my-4">
      <div className="row g-4 justify-content-center">
        {cards.map((card) => (
          <div key={card.id} className="col-md-3">
            <div className="hover-card">
              <Card shaded style={{ width: 320 }}>
                <img
                  src={card.image}
                  alt={card.title}
                  style={{ width: '100%', height: '200px', objectFit: 'contain' }}
                />
                <Card.Header as="h5">{card.title}</Card.Header>
                <Card.Body>{card.description}</Card.Body>
                <Card.Footer>
                  <TagGroup>
                    <Tag size="sm">🐶 Dog</Tag>
                    <Tag size="sm">🌤️ Joy</Tag>
                    <Tag size="sm">🏞️ Nature</Tag>
                  </TagGroup>
                </Card.Footer>
              </Card>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
}

export default Container1;
