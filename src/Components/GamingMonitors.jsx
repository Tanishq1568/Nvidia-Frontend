import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../css/ProductList.css';

function GamingMonitors() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:8000/AddCategories")
      .then((res) => {
        if (res.data.success) {
          const filtered = res.data.products.filter(
            (product) => product.category === "Gaming Monitor"
          );
          setProducts(filtered);
        }
      })
      .catch((err) => console.error("Fetch Monitors Error:", err));
  }, []);

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Gaming Monitors</h2>
      <div className="row">
        {products.map((product, index) => {
          console.log("Product received:", product); // ✅ Debug line

          return (
            <div
              key={index}
              className="col-md-4 mb-4"
              onClick={() => navigate('/productdetails', { state: { product } })}
              style={{ cursor: 'pointer' }}
            >
              <div className="card h-100 shadow">
                <img
                  src={product.image}
                  className="card-img-top"
                  alt={product.name}
                  style={{ maxHeight: '200px', objectFit: 'contain' }}
                />
                <div className="card-body">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text">{product.description}</p>
                  <p className="card-text fw-bold">
                    ₹{(product.price || 0).toLocaleString('en-IN')}
                  </p>

                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default GamingMonitors;
