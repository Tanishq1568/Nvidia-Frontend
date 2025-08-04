// SavedReview.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";

function SavedReview() {
  const [allReviews, setAllReviews] = useState([]);

  const fetchReviews = () => {
    axios.get("http://localhost:8000/reviews").then((res) => {
      setAllReviews(res.data);
    });
  };

  useEffect(() => {
    fetchReviews();
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this review?")) {
      await axios.delete(`http://localhost:8000/reviews/${id}`);
      fetchReviews(); // refresh reviews
    }
  };

  return (
    <div className="container my-5">
      <h2 className="text-success text-center mb-4">All Saved Reviews</h2>
      <div className="row">
        {allReviews.map((r) => (
          <div key={r._id} className="col-md-6 mb-3">
            <div className="card border-info shadow-sm">
              <div className="card-body">
                <h5>{r.name}</h5>
                <p>{r.message}</p>
                <p>
                  ⭐ {r.rating} -{" "}
                  <small>{new Date(r.date).toLocaleString()}</small>
                </p>
                <p className="text-muted">Product ID: {r.productId}</p>
                <button
                  className="btn btn-danger btn-sm mt-2"
                  onClick={() => handleDelete(r._id)}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SavedReview;
