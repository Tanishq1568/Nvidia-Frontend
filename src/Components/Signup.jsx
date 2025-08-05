import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/Signin.css';
import loginImage from '../images/login.jpg';
import Swal from 'sweetalert2';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const togglePassword = () => setShowPassword((prev) => !prev);

  const [signupdata, setsignupdata] = useState({});
  const [getuser, setgetuser] = useState([]);
  const go = useNavigate();

  const inputvalue = (e) => {
    setsignupdata({
      ...signupdata,
      [e.target.name]: e.target.value,
    });
  };

  const allusers = () => {
    axios.get('https://nvidia-backend-xi.vercel.app/allusers')
      .then((res) => {
        if (res.data.status) {
          setgetuser(res.data.ouruser);
          console.log(res.data.ouruser);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    allusers();
  }, []);

  const signupbtn = () => {
    const { firstname, lastname, email, password } = signupdata;

    // Validation check
    if (!firstname || !lastname || !email || !password) {
      Swal.fire({
        icon: "warning",
        title: "Please fill out all the fields!",
      });
      return;
    }

    // Check if user already exists
    const alreadyuser = getuser.find(user => user.email === email);

    if (alreadyuser) {
      Swal.fire({
        icon: "error",
        title: "User already exists with this email!",
      });
      go("/loginuser");
    } else {
      axios.post("https://nvidia-backend-xi.vercel.app/signup", signupdata)
        .then((res) => {
          if (res.data.status) {
            Swal.fire({
              title: res.data.msg,
              icon: "success",
            });
            go("/loginuser");
          } else {
            Swal.fire({
              icon: "error",
              title: res.data.msg,
            });
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <div className="vh-100 d-flex align-items-center" style={{ backgroundColor: '#ffffff', marginTop: "60px" }}>
      <div className="container">
        <div className="row h-100 shadow-lg rounded overflow-hidden">
          {/* Left: Form Section */}
          <div className="col-md-6 bg-white d-flex justify-content-center align-items-center p-4">
            <div className="w-100" style={{ maxWidth: '400px' }}>
              <h2 className="text-center mb-2">Create an Account</h2>
              <p className="text-center mb-4">Provide your details</p>

              <div className="row mb-3">
                <div className="col">
                  <label htmlFor="fname" className="form-label">First Name</label>
                  <input type="text" className="form-control" id="fname" name="firstname" onChange={inputvalue} placeholder="Enter firstname" />
                </div>
                <div className="col">
                  <label htmlFor="lname" className="form-label">Last Name</label>
                  <input type="text" className="form-control" id="lname" name="lastname" onChange={inputvalue} placeholder="Enter lastname" />
                </div>
              </div>

              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="email" className="form-control" id="email" name="email" onChange={inputvalue} placeholder="Enter email" />
              </div>

              <div className="mb-3 position-relative">
                <label htmlFor="pass" className="form-label">Password</label>
                <input
                  type={showPassword ? "text" : "password"}
                  className="form-control"
                  id="pass"
                  name="password"
                  onChange={inputvalue}
                  placeholder="Enter password"
                />
                <span
                  onClick={togglePassword}
                  style={{ position: 'absolute', right: '10px', top: '38px', cursor: 'pointer' }}
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

              <button onClick={signupbtn} type="submit" className="btn w-100 mb-3" style={{ backgroundColor: "#76b900", border: "#76b900", color: "#fff" }}>
                Register
              </button>

              <div className="text-center">
                <p className="mb-0">Already have an account?&nbsp;<a href="/loginuser">Signin</a></p>
              </div>
            </div>
          </div>

          {/* Right: Image Section */}
          <div className="col-md-6 d-none d-md-block p-0">
            <img src={loginImage} alt="Signup Visual" className="img-fluid h-100 w-100" style={{ objectFit: 'cover' }} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
