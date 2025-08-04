import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import Swal from 'sweetalert2';

function AddCategories({ goBack, onProductAdded }) {
  const [formData, setFormData] = useState({
    name: '',
    category: '',
    year: '',
    quantity: '1',
    code: '',
    inStock: true,
    status: 'active',
    image: '',
    price: '',
    salePrice: ''
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === 'checkbox' ? checked : value;
    setFormData({ ...formData, [name]: newValue });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const requiredFields = ["name", "category", "year", "code", "image", "price", "salePrice"];
    const emptyFields = requiredFields.filter(field => !formData[field] || formData[field].trim() === "");

    if (formData.category === "") {
      Swal.fire("Validation Error", "Please select a valid category.", "warning");
      return;
    }

    if (emptyFields.length > 0) {
      Swal.fire("Validation Error", `Please fill in all required fields: ${emptyFields.join(", ")}`, "warning");
      return;
    }

    try {
      const res = await axios.post("http://localhost:8000/AddCategories", formData);
      if (res.data.success) {
        Swal.fire("Success", "Product added successfully!", "success");

        if (onProductAdded) {
          onProductAdded();
        }

        // Reset form
        setFormData({
          name: '',
          category: '',
          year: '',
          quantity: '1',
          code: '',
          inStock: true,
          status: 'active',
          image: '',
          price: '',
          salePrice: ''
        });
      } else {
        Swal.fire("Failed", "Failed to add product", "error");
      }
    } catch (err) {
      console.error(err);
      Swal.fire("Error", "Server error occurred", "error");
    }
  };

  return (
    <div className="container bg-white shadow-lg rounded p-4 mt-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="fw-bold text-dark">Category Information</h2>
        <button
          onClick={goBack}
          className="btn btn-outline-success"
          style={{ backgroundColor: "#76B900", color: "white", border: "#76B900" }}
        >
          <i className="bi bi-arrow-left-short"></i> Back to Product
        </button>
      </div>

      <form onSubmit={handleSubmit} autoComplete='off'>
        <div className="row g-4">
          <div className="col-md-6">
            <label className="form-label fw-semibold">Product Name</label>
            <input type="text" name="name" className="form-control" placeholder="Enter Product Name" value={formData.name} onChange={handleChange} />
          </div>

          <div className="col-md-6">
            <label className="form-label fw-semibold">Product Category</label>
            <select name="category" className="form-select" value={formData.category} onChange={handleChange}>
              <option value="">Select Category</option>
              <option>Graphic Card</option>
              <option>GamingPC's</option>
              <option>GamingLaptop</option>
              <option>Gaming Monitor</option>
            </select>
          </div>

          <div className="col-md-6">
            <label className="form-label fw-semibold">Published Year</label>
            <input type="text" name="year" className="form-control" placeholder="Enter Year" value={formData.year} onChange={handleChange} />
          </div>

          <div className="col-md-6">
            <label className="form-label fw-semibold">Select Quantity</label>
            <select name="quantity" className="form-select" value={formData.quantity} onChange={handleChange}>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
            </select>
          </div>

          <div className="col-md-6">
            <label className="form-label fw-semibold">Product Code</label>
            <input type="text" name="code" className="form-control" placeholder="Enter Product Code" value={formData.code} onChange={handleChange} />
          </div>

          <div className="col-md-6 d-flex flex-column justify-content-end">
            <div className="form-check mb-2">
              <input className="form-check-input" type="checkbox" name="inStock" id="inStock" checked={formData.inStock} onChange={handleChange} />
              <label className="form-check-label" htmlFor="inStock">In Stock</label>
            </div>

            <div className="d-flex align-items-center">
              <span className="me-2 fw-medium">Status:</span>
              <div className="form-check me-3">
                <input className="form-check-input" type="radio" name="status" value="active" checked={formData.status === 'active'} onChange={handleChange} />
                <label className="form-check-label" htmlFor="active">Active</label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="radio" name="status" value="deactive" checked={formData.status === 'deactive'} onChange={handleChange} />
                <label className="form-check-label" htmlFor="deactive">Deactive</label>
              </div>
            </div>
          </div>

          <div className="col-12">
            <label className="form-label fw-semibold">Product Image URL</label>
            <input type="text" name="image" className="form-control" placeholder="https://example.com/image.jpg" value={formData.image} onChange={handleChange} />
          </div>

          <div className="col-md-6">
            <label className="form-label fw-semibold">Regular Price</label>
            <input type="number" name="price" className="form-control" placeholder="$0.00" value={formData.price} onChange={handleChange} />
          </div>

          <div className="col-md-6">
            <label className="form-label fw-semibold">Sale Price</label>
            <input type="number" name="salePrice" className="form-control" placeholder="$0.00" value={formData.salePrice} onChange={handleChange} />
          </div>

          <div className="col-12 text-end">
            <button
              type="submit"
              className="btn text-white fw-bold"
              style={{ backgroundColor: "#76B900", borderRadius: "10px" }}
            >
              Add Category
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default AddCategories;
