import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

function Cart() {
  const [cartItems, setCartItems] = useState([]);

  // Fetch cart items on mount
  useEffect(() => {
    fetchCart();
  }, []);

  const fetchCart = async () => {
    try {
      const response = await axios.get("https://nvidia-backend-xi.vercel.app/cart");
      setCartItems(response.data);
    } catch (error) {
      console.error("Failed to fetch cart items:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://nvidia-backend-xi.vercel.app/cart/${id}`);
      setCartItems(prev => prev.filter(item => item._id !== id));
    } catch (error) {
      console.error("Delete error:", error);
    }
  };

  const handleCheckout = async () => {
    try {
      alert("Order placed successfully!");
      await axios.delete("https://nvidia-backend-xi.vercel.app/cart"); // Clear cart after order
      setCartItems([]);
    } catch (error) {
      console.error("Checkout error:", error);
      alert("Failed to place order");
    }
  };

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const discount = subtotal * 0.1; // 10% discount
  const tax = (subtotal - discount) * 0.18; // 18% GST
  const grandTotal = subtotal - discount + tax;

  return (
    <div className="container py-5">
      <h2 className="text-center mb-4">🛒 Your Cart</h2>

      {cartItems.length === 0 ? (
        <div className="alert alert-info text-center">Your cart is empty.</div>
      ) : (
        <div className="row">
          {/* Left Side: Cart Items */}
          <div className="col-md-8">
            {cartItems.map((item, index) => (
              <div key={index} className="card mb-3 shadow-sm">
                <div className="row g-0 align-items-center">
                  <div className="col-md-3">
                    <img src={item.image} className="img-fluid rounded-start" alt={item.name} />
                  </div>
                  <div className="col-md-6">
                    <div className="card-body">
                      <h5 className="card-title">{item.name}</h5>
                      <p className="card-text mb-1">Price: ₹{item.price.toLocaleString('en-IN')}</p>
                      <p className="card-text">Quantity: {item.quantity}</p>
                    </div>
                  </div>
                  <div className="col-md-3 text-center">
                    <p className="fw-bold text-success mt-3">
                      ₹ {(item.price * item.quantity).toLocaleString('en-IN')}
                    </p>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => handleDelete(item._id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Side: Summary */}
          <div className="col-md-4">
            <div className="card p-4 shadow">
              <h4 className="mb-3">Payment Summary</h4>
              <ul className="list-group list-group-flush">
                <li className="list-group-item d-flex justify-content-between">
                  <span>Subtotal</span>
                  <strong>₹ {subtotal.toLocaleString('en-IN')}</strong>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                  <span>Discount (10%)</span>
                  <span className="text-success">- ₹ {discount.toLocaleString('en-IN')}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                  <span>Tax (18%)</span>
                  <span className="text-warning">+ ₹ {tax.toLocaleString('en-IN')}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                  <span className="fw-bold">Grand Total</span>
                  <span className="fw-bold text-success">₹ {grandTotal.toLocaleString('en-IN')}</span>
                </li>
              </ul>
              <button
                className="btn mt-4 w-100 text-white"
                style={{ backgroundColor: '#76B900' }}
                onClick={handleCheckout}
              >
                Make Payment
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
