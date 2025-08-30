const apiUrl = import.meta.env.VITE_API_URL;

import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReviewPage from "../Components/pages/ReviewPage"
function ProductDetails() {
    const location = useLocation();
    const navigate = useNavigate();
    const { product } = location.state || {};

    if (!product) {
        return <div className="text-center mt-5">No product data available.</div>;
    }


      const handleAddToWishlist = async () => {
    try {
        const response = await axios.post(`${apiUrl}/wishlist`, {
            name: product.name,
            price: product.price,
            quantity: 1, 
            image: product.image 
        });
        alert("Product added to cart!");
    } catch (error) {
        console.error("Add to cart failed:", error);
        alert("Failed to add product to cart.");
    }
};
   const handleAddToCart = async () => {
    try {
        const response = await axios.post(`${apiUrl}/cart`, {
            name: product.name,
            price: product.price,
            quantity: 1, 
            image: product.image 
        });
        alert("Product added to cart!");
    } catch (error) {
        console.error("Add to cart failed:", error);
        alert("Failed to add product to cart.");
    }
};


    return (
        <>
        <div className="container" style={{ marginTop: "150px" }}>
            <div className="row align-items-center">
                <h1 style={{ marginBottom: "50px" }}>Product View</h1>
                <hr />
                <div className="col-md-6">
                    <img
                        src={product.image}
                        alt={product.name}
                        className="img-fluid rounded shadow"
                        style={{ maxHeight: '250px', objectFit: 'contain' }}
                    />
                </div>
                <div className="col-md-6">
                    <h2>{product.name}</h2>
                    <h4 className="text-success">
                        ₹ {(product.price || 0).toLocaleString('en-IN', {
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2
                        })}
                    </h4>

                    <ul className="list-unstyled mt-3">
                        {product.features && product.features.map((feature, idx) => (
                            <li key={idx}>• {feature}</li>
                        ))}
                    </ul>
                    <div className="mt-4 d-flex gap-3">
                        <button className="btn btn-warning" onClick={handleAddToCart}>
                            Add to Cart
                        </button>
                        <button className="btn btn-warning" onClick={handleAddToWishlist}>
                            Wishlist
                        </button>
                        <button className="btn btn-success">
                            Buy Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
       <ReviewPage productId={product._id} />

        </>
    );
}

export default ProductDetails;
