import React from 'react';
import image from "../images/logo.png";
import '../css/Home.css';
import { Button, ButtonToolbar } from 'rsuite';
import cart from "../images/cartlogo.png";
import wishlist from "../images/wishlistlogo.png"
import { COLOR } from 'rsuite/esm/internals/constants';
import { Link, useNavigate } from 'react-router-dom';

function Navbar() {
  let go = useNavigate()
  return (
    <>
      <>
        {/* 🔵 Top Navbar */}
        <nav
          className="navbar navbar-expand-lg fixed-top"
          style={{
            backgroundColor: '#76b900',
            padding: '4px 16px',
            zIndex: 1040
          }}
        >
          <div className="container-fluid">
          <a href='/'>
            <img
              src={image}
              alt="Logo"
              style={{ borderRadius: '10px', height: '40px', marginRight: '15px' }}
            />
            </a>

            {/* Toggler for Top Navbar */}
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#topNavbarCollapse"
              aria-controls="topNavbarCollapse"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" style={{ filter: 'invert(1)' }}></span>
            </button>

            <div className="collapse navbar-collapse" id="topNavbarCollapse">
              <form className="d-flex align-items-center ms-auto mt-2 mt-lg-0" role="search">
                <input
                  className="form-control me-2 fw-bold"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                  style={{ width: '200px', height: '35px' }}
                />
                <button
                  className="btn btn-outline-success fw-bold"
                  type="submit"
                  style={{ height: '35px',color:"white", border:"#76b900" }}
                >
                  Search
                </button>
              </form>
            </div>
          </div>
        </nav>

        {/* 🔵 Second Navbar */}
        <nav
          className="navbar navbar-expand-lg"
          style={{
            backgroundColor: "#000",
            position: 'fixed',
            top: '50px', // make sure it is below the first navbar
            width: '100%',
            zIndex: 1030,
            padding: '0 20px'
          }}
        >
          <div className="container-fluid">
            {/* Toggler for Main Navbar */}
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#mainNavbarCollapse"
              aria-controls="mainNavbarCollapse"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" style={{ filter: 'invert(1)' }}></span>
            </button>

            <div className="collapse navbar-collapse justify-content-between" id="mainNavbarCollapse">
              {/* LEFT MENU */}
              <ul className="navbar-nav d-flex align-items-center mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link text-white fs-4" href="/">GeForce</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white" href="/">Home</a>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle text-white" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Product
                  </a>
                  <ul className="dropdown-menu bg-white">
                    <li><a className="dropdown-item text-dark" href="/GraphicCard">Graphics Cards</a></li>
                    <li><a className="dropdown-item text-dark" href="/gaminglaptop">Laptops</a></li>
                    <li><a className="dropdown-item text-dark" href="/GamingPC">Gaming PCs</a></li>

                    <li><hr className="dropdown-divider" /></li>
                    <li><a className="dropdown-item text-dark" href="/monitors">Gaming Monitors</a></li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white" href="#">NVIDIA App</a>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle text-white" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Account
                  </a>

                  <ul className="dropdown-menu bg-white">
                    <li><a className="dropdown-item text-dark" href="/loginuser">Login User</a></li>
                    <li><Link className="dropdown-item text-dark" to="/signup">SignUp</Link> </li>
                    <li><a className="dropdown-item text-dark" href="/forgotpassword">Forgot Password</a> </li>


                    {/* Nested Dropdown */}
                    <li className="dropdown-submenu position-relative">
                      <a
                        className="dropdown-item dropdown-toggle text-dark"
                        href="#"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        My Account
                      </a>

                      <ul className="dropdown-menu bg-white position-absolute start-100 top-0 mt-0">
                        <li><a className="dropdown-item text-dark" href="#">Orders</a></li>
                        <li><a className="dropdown-item text-dark" href="#">Settings</a></li>
                        <li><a className="dropdown-item text-dark" href="#">Payment Method</a></li>
                      </ul>
                    </li>
                  </ul>
                </li>

                <li className="nav-item">
                  <a className="nav-link text-white" href="#">Support</a>
                </li>
              </ul>

              {/* RIGHT BUTTONS */}
              <div className="d-flex align-items-center mt-2 mt-lg-0">
                <ButtonToolbar>
                  <Button
                    appearance="default"
                    startIcon={<img src={wishlist} alt="Wishlist" style={{ width: 20, height: 20 }} />}
                  >
                    Wishlist
                  </Button>
                </ButtonToolbar>
                &nbsp;
                <ButtonToolbar>
                  <Button onClick={() => go('/cart')}
                    appearance="default"
                    startIcon={<img src={cart} alt="Cart" style={{ width: 20, height: 20 }}/>}
                  >
                    Cart
                  </Button>
                </ButtonToolbar>
              </div>
            </div>
          </div>
        </nav>
      </>




    </>
  );
}

export default Navbar;
