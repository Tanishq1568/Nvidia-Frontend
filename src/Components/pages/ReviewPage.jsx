import React, { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

function ReviewPage({ productId }) {
  const [reviews, setReviews] = useState([]);
  const [form, setForm] = useState({ name: "", message: "", rating: 0 });

  // Fetch reviews only for the current product
  const fetchReviews = async () => {
    try {
      const res = await axios.get(`${apiUrl}/reviews?productId=${productId}`);
      setReviews(res.data);
    } catch (err) {
      console.error("Error fetching reviews:", err);
    }
  };

  useEffect(() => {
    if (productId) {
      fetchReviews();
    }
  }, [productId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, message, rating } = form;

    if (!name || !message || rating === 0) {
      return alert("Fill all fields including rating");
    }

    try {
      await axios.post(`${apiUrl}/reviews`, {
        ...form,
        productId,
      });

      setForm({ name: "", message: "", rating: 0 });
      fetchReviews();
    } catch (err) {
      console.error("Error submitting review:", err);
      alert("Failed to submit review.");
    }
  };

  const renderStars = (rating) =>
    "★".repeat(rating) + "☆".repeat(5 - rating);

  const getRatingLabel = (rating) => {
    const labels = ["", "Poor", "Fair", "Good", "Very Good", "Outstanding"];
    return labels[rating] || "";
  };

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4 text-success">Customer Reviews</h2>

      {/* Add Review Form */}
      <form onSubmit={handleSubmit} className="mb-5">
        <div className="mb-3">
          <input
            className="form-control"
            placeholder="Your Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
        </div>
        <div className="mb-3">
          <textarea
            className="form-control"
            placeholder="Your Review"
            rows="4"
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
          ></textarea>
        </div>

        {/* Star Rating */}
        <div className="mb-3">
          <label className="form-label me-2">Your Rating:</label>
          {[1, 2, 3, 4, 5].map((star) => (
            <span
              key={star}
              style={{
                fontSize: "1.5rem",
                color: form.rating >= star ? "gold" : "#ccc",
                cursor: "pointer",
              }}
              onClick={() => setForm({ ...form, rating: star })}
            >
              ★
            </span>
          ))}
          <div className="text-muted mt-1">{getRatingLabel(form.rating)}</div>
        </div>

        <button className="btn btn-success w-100">Submit Review</button>
      </form>

      {/* Reviews Display */}
      <div className="row">
        {reviews.length === 0 ? (
          <p className="text-center text-muted">No reviews yet.</p>
        ) : (
          reviews.map((review) => (
            <div key={review._id} className="col-md-6 mb-4">
              <div className="card border-success shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">{review.name}</h5>
                  <p className="card-text">{review.message}</p>
                  <div className="text-warning mb-2">
                    {renderStars(review.rating || 0)}{" "}
                    <small className="text-muted">
                      ({getRatingLabel(review.rating || 0)})
                    </small>
                  </div>
                  <p className="card-text">
                    <small className="text-muted">
                      {new Date(review.date).toLocaleString()}
                    </small>
                  </p>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default ReviewPage;
