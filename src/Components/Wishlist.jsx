import React, { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

const apiUrl = import.meta.env.VITE_API_URL;

function Wishlist() {
  const [wishlistItems, setWishlistItems] = useState([]);

  // Fetch wishlist items on mount
  useEffect(() => {
    fetchWishlist();
  }, []);

  const fetchWishlist = async () => {
    try {
      const response = await axios.get(`${apiUrl}/wishlist`);
      setWishlistItems(response.data);
    } catch (error) {
      console.error("Failed to fetch wishlist items:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${apiUrl}/wishlist/${id}`);
      setWishlistItems((prev) => prev.filter((item) => item._id !== id));
    } catch (error) {
      console.error("Delete error:", error);
    }
  };

  return (
    <div className="container py-5">
      <h2 className="text-center mb-4">💖 Your Wishlist</h2>

      {wishlistItems.length === 0 ? (
        <div className="alert alert-info text-center">
          Your wishlist is empty.
        </div>
      ) : (
        <div className="row">
          <div className="col-md-10 mx-auto">
            {wishlistItems.map((item, index) => (
              <div key={index} className="card mb-3 shadow-sm">
                <div className="row g-0 align-items-center">
                  <div className="col-md-3">
                    <img
                      src={item.image}
                      className="img-fluid rounded-start"
                      alt={item.name}
                    />
                  </div>
                  <div className="col-md-6">
                    <div className="card-body">
                      <h5 className="card-title">{item.name}</h5>
                      <p className="card-text mb-1">
                        Price: ₹{item.price.toLocaleString("en-IN")}
                      </p>
                    </div>
                  </div>
                  <div className="col-md-3 text-center">
                    <button
                      className="btn btn-danger btn-sm mt-3"
                      onClick={() => handleDelete(item._id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Wishlist;
