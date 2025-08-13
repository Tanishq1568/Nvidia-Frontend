const apiUrl = import.meta.env.VITE_API_URL;

import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/Signin.css';
import signupImage from '../images/login.jpg';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom'; // ✅ Import navigate

function ForgotPassword() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); // ✅ Initialize navigate

  const togglePassword = () => setShowPassword(prev => !prev);
  const toggleConfirmPassword = () => setShowConfirmPassword(prev => !prev);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password || !confirmPassword) {
      Swal.fire("Please fill all the fields");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      const res = await axios.post(`${apiUrl}/forgotpassword`, {
        email,
        password,
      });

      if (res.data.success) {
        Swal.fire("Success", res.data.message, "success").then(() => {
          setEmail('');
          setPassword('');
          setConfirmPassword('');
          navigate('/loginuser'); // ✅ Redirect after success
        });
      } else {
        Swal.fire("Error", res.data.message, "error");
      }
    } catch (err) {
      console.error(err);
      Swal.fire("Server Error", "Something went wrong", "error");
    }
  };

  return (
    <div className="signin-bg d-flex justify-content-center align-items-center vh-100">
      <div className="container shadow p-0" style={{ maxWidth: '900px', borderRadius: '12px', marginTop: "100px" }}>
        <div className="row g-0">
          <div className="col-md-6 d-none d-md-block">
            <img src={signupImage} alt="Reset" className="img-fluid h-100" style={{ borderTopLeftRadius: '12px', borderBottomLeftRadius: '12px', objectFit: 'cover' }} />
          </div>
          <div className="col-md-6 p-4 bg-white" style={{ borderTopRightRadius: '12px', borderBottomRightRadius: '12px' }}>
            <h3 className="text-center mb-4">Reset Password</h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  required
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="mb-3 position-relative">
                <label htmlFor="newPassword" className="form-label">New Password</label>
                <input
                  type={showPassword ? "text" : "password"}
                  className="form-control"
                  id="newPassword"
                  required
                  placeholder="Enter new password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <span
                  onClick={togglePassword}
                  style={{ position: 'absolute', right: '10px', top: '38px', cursor: 'pointer' }}
                >
                  {showPassword ? (
                    <i className="bi bi-eye"></i>
                  ) : (
                    <i className="bi bi-eye-slash"></i>
                  )}
                </span>
              </div>

              <div className="mb-3 position-relative">
                <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  className="form-control"
                  id="confirmPassword"
                  required
                  placeholder="Re-enter new password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
                <span
                  onClick={toggleConfirmPassword}
                  style={{ position: 'absolute', right: '10px', top: '38px', cursor: 'pointer' }}
                >
                  {showConfirmPassword ? (
                    <i className="bi bi-eye"></i>
                  ) : (
                    <i className="bi bi-eye-slash"></i>
                  )}
                </span>
              </div>

              {error && <p className="text-danger text-center mb-2">{error}</p>}

              <button type="submit" className="btn btn-primary w-100" style={{ backgroundColor: "#76b900", border: "#76b900" }}>
                Reset Password
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;
