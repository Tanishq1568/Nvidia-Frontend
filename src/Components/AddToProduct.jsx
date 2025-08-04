import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function AddToProduct({ goBack }) {
  return (
    <div className="container bg-white shadow-lg rounded p-4 mt-4">

      {/* Title and Back Button */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="fw-bold text-dark">Product Information</h2>
        <button
          onClick={goBack}
          className="btn btn-outline-success" style={{backgroundColor:"#76B900",color:"white",border:"#76B900"}}
        >
          <i class="bi bi-arrow-left-short"></i> Back to Product
        </button>
      </div>

      {/* Form Starts */}
      <form>
        <div className="row g-4">

          <div className="col-md-6">
            <label className="form-label fw-semibold">Product Name</label>
            <input type="text" className="form-control" placeholder="Enter Product Name" />
          </div>

          <div className="col-md-6">
            <label className="form-label fw-semibold">Product Category</label>
            <select className="form-select">
              <option>Select Category</option>
              <option>Electronics</option>
              <option>Clothing</option>
              <option>Accessories</option>
            </select>
          </div>

          <div className="col-md-6">
            <label className="form-label fw-semibold">Weight</label>
            <input type="text" className="form-control" placeholder="Enter Weight" />
          </div>

          <div className="col-md-6">
            <label className="form-label fw-semibold">Select Unit</label>
            <select className="form-select">
              <option>g</option>
              <option>kg</option>
              <option>lb</option>
            </select>
          </div>

          <div className="col-md-6">
            <label className="form-label fw-semibold">Product Code</label>
            <input type="text" className="form-control" placeholder="Enter Product Code" />
          </div>

          {/* Stock and Status */}
          <div className="col-md-6 d-flex flex-column justify-content-end">
            <div className="form-check mb-2">
              <input className="form-check-input" type="checkbox" id="inStock" defaultChecked />
              <label className="form-check-label" htmlFor="inStock">In Stock</label>
            </div>

            <div className="d-flex align-items-center">
              <span className="me-2 fw-medium">Status:</span>
              <div className="form-check me-3">
                <input className="form-check-input" type="radio" name="status" id="active" defaultChecked />
                <label className="form-check-label" htmlFor="active">Active</label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="radio" name="status" id="disabled" />
                <label className="form-check-label" htmlFor="disabled">Disabled</label>
              </div>
            </div>
          </div>

          <div className="col-12">
            <label className="form-label fw-semibold">Product Image URL</label>
            <input type="text" className="form-control" placeholder="https://example.com/image.jpg" />
          </div>


          <div className="col-md-6">
            <label className="form-label fw-semibold">Regular Price</label>
            <input type="number" className="form-control" placeholder="$0.00" />
          </div>

          <div className="col-md-6">
            <label className="form-label fw-semibold">Sale Price</label>
            <input type="number" className="form-control" placeholder="$0.00" />
          </div>


          {/* Submit Button */}
          <div className="col-12 text-end">
            <button
              type="submit"
              className="btn text-white fw-bold"
              style={{ backgroundColor: "#76B900", borderRadius: "10px" }}
            >
              Add Product
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default AddToProduct;
