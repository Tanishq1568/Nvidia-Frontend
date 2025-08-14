import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

function CategoryTable({ reloadFlag }) {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  useEffect(() => {
    fetchProducts();
  }, [reloadFlag]);

  const fetchProducts = async () => {
    try {
      const res = await axios.get(`${apiUrl}/AddCategories`);
      setProducts(res.data.products || []);
      setCurrentPage(1);
    } catch (error) {
      console.error('Error fetching products', error);
    }
  };

  const handleDelete = async (id) => {
    const confirm = await Swal.fire({
      title: "Are you sure?",
      text: "This category will be permanently deleted.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!"
    });

    if (confirm.isConfirmed) {
      try {
        await axios.delete(`${apiUrl}/deleteCategor/${id}`);
        Swal.fire("Deleted!", "Category has been deleted.", "success");
        fetchProducts();
      } catch (error) {
        console.error("Error deleting category", error);
        Swal.fire("Error", "Failed to delete category.", "error");
      }
    }
  };

  const filteredProducts = products.filter(item =>
    item.category.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (statusFilter === '' || item.status === statusFilter)
  );

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedProducts = filteredProducts.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="p-4 bg-white rounded shadow mt-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <input
          type="text"
          className="form-control w-50"
          placeholder="Search category..."
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setCurrentPage(1);
          }}
        />
        <select
          className="form-select w-25"
          value={statusFilter}
          onChange={(e) => {
            setStatusFilter(e.target.value);
            setCurrentPage(1);
          }}
        >
          <option value="">All Status</option>
          <option value="active">Active</option>
          <option value="deactive">Deactive</option>
        </select>
      </div>

      <table className="table table-bordered text-center">
        <thead className="table-light">
          <tr>
            <th>Image</th>
            <th>Product Name</th>
            <th>Category</th>
            <th>Status</th>
            <th>Total Products</th>
            <th>Price  (₹) </th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {paginatedProducts.map((item, idx) => (
            <tr key={idx}>
              <td>
                <img
                  src={item.image || "https://via.placeholder.com/40"}
                  alt="img"
                  width="40"
                  height="40"
                />
              </td>
              <td>{item.name }</td>
              <td>{item.category}</td>
              <td style={{
                backgroundColor: item.status === 'active' ? '#d4edda' : '#f8d7da',
                color: item.status === 'active' ? '#155724' : '#721c24',
                fontWeight: 'bold'
              }}>
                {item.status}
              </td>
              <td>{item.total || 1}</td>
              <td>₹{(item.price || 0).toLocaleString('en-IN')}</td>

 
              <td>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => handleDelete(item._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
          {paginatedProducts.length === 0 && (
            <tr>
              <td colSpan="6" className="text-muted">
                No matching categories found.
              </td>
            </tr>
          )}
        </tbody>
      </table>

      <div className="d-flex justify-content-between align-items-center mt-3">
        <span className="text-muted">Page {currentPage} of {totalPages}</span>
        <div>
          <button
            className="btn btn-outline-primary me-2"
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          <button
            className="btn btn-outline-primary"
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default CategoryTable;
