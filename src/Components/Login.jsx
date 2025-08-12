import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../css/Signin.css";
import loginImage from '../images/login.webp';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const togglePassword = () => setShowPassword((prev) => !prev);
  const go = useNavigate();

  const [logindata, setlogindata] = useState({ email: '', password: '' });

  const handleChange = (e) => {
    setlogindata({ ...logindata, [e.target.name]: e.target.value });
  };

  const loginbtn = (e) => {
    e.preventDefault();

    const { email, password } = logindata;

    if (!email || !password) {
      Swal.fire({
        icon: 'warning',
        title: 'All fields required',
        text: 'Please enter both email and password.',
      });
      return;
    }

    axios.post(`${apiUrl}/loginuser`, logindata)
      .then((res) => {
        if (res.data.status) {
          Swal.fire({
            icon: "success",
            title: "Login successful!",
          }).then(() => {
            localStorage.setItem("profile", JSON.stringify(res.data.user));
            go("/");
          });
        } else {
          Swal.fire({
            icon: "error",
            title: res.data.msg,
          });
        }
      })
      .catch((err) => {
        console.log("Login Error:", err);
        Swal.fire({
          icon: "error",
          title: "Something went wrong. Try again!",
        });
      });
  };

  return (
    <div className="vh-100 d-flex align-items-center" style={{ backgroundColor: '#ffffff', marginTop: "60px" }}>
      <div className="container">
        <div className="row h-100 shadow-lg rounded overflow-hidden">

          {/* Left: Login Form */}
          <div className="col-md-6 bg-white d-flex justify-content-center align-items-center p-4">
            <div className="w-100" style={{ maxWidth: '400px' }}>
              <h2 className="text-center mb-4">Login</h2>
              <form onSubmit={loginbtn}>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    value={logindata.email}
                    onChange={handleChange}
                    placeholder="Enter email"
                  />
                </div>

                <div className="text-end">
                  <a href="/forgotpassword" style={{ textDecoration: "none" }}>
                    Forgot Password?
                  </a>
                </div>

                <div className="mb-3 position-relative">
                  <label htmlFor="pass" className="form-label">Password</label>
                  <input
                    type={showPassword ? "text" : "password"}
                    className="form-control"
                    id="pass"
                    name="password"
                    value={logindata.password}
                    onChange={handleChange}
                    placeholder="Enter password"
                  />
                  <span
                    onClick={togglePassword}
                    style={{
                      position: 'absolute',
                      right: '10px',
                      top: '38px',
                      cursor: 'pointer'
                    }}
                  >
                    {showPassword ? (
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="black" viewBox="0 0 16 16">
                        <path d="M16 8s-3.5 5.5-8 5.5S0 8 0 8s3.5-5.5 8-5.5S16 8 16 8zM8 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                        <path d="M8 10a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" />
                      </svg>
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="black" viewBox="0 0 16 16">
                        <path d="M13.359 11.238l1.35 1.35-1.06 1.06-1.35-1.35A7.973 7.973 0 0 1 8 13.5c-4.5 0-8-5.5-8-5.5a14.378 14.378 0 0 1 2.612-2.91L1.646 2.646 2.707 1.586l12 12-1.06 1.06-1.288-1.288zm-2.263-2.263a3 3 0 0 1-4.132-4.132l4.132 4.132z" />
                        <path d="M10.648 8.352l-4.132-4.132a3 3 0 0 1 4.132 4.132z" />
                      </svg>
                    )}
                  </span>
                </div>

                <button onClick={loginbtn} type="submit" className="btn w-100" style={{ backgroundColor: "#76b900", border: "#76b900", color: "#fff" }}>
                  Login
                </button>
              </form>
            </div>
          </div>

          {/* Right: Image Section */}
          <div className="col-md-6 d-none d-md-block p-0">
            <img
              src={loginImage}
              alt="Login Visual"
              className="img-fluid h-100 w-100"
              style={{ objectFit: 'cover' }}
            />
          </div>

        </div>
      </div>
    </div>
  );
}

export default Login;
