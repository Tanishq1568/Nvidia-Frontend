import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Footer() {
  return (
    <footer className="bg-dark text-white py-5 mt-5">
      <div className="container">
        <div className="row text-start">
          {/* Column 1 */}
          <div className="col-md-4 mb-4 mb-md-0">
            <h5 className="mb-3">Company</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-white text-decoration-none">About Us</a></li>
              <li><a href="#" className="text-white text-decoration-none">Careers</a></li>
              <li><a href="#" className="text-white text-decoration-none">Press</a></li>
            </ul>
          </div>

          {/* Column 2 */}
          <div className="col-md-4 mb-4 mb-md-0">
            <h5 className="mb-3">Support</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-white text-decoration-none">Help Center</a></li>
              <li><a href="#" className="text-white text-decoration-none">Returns</a></li>
              <li><a href="#" className="text-white text-decoration-none">Shipping</a></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="col-md-4">
            <h5 className="mb-3">Legal</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-white text-decoration-none">Privacy Policy</a></li>
              <li><a href="#" className="text-white text-decoration-none">Terms of Service</a></li>
              <li><a href="#" className="text-white text-decoration-none">Cookie Policy</a></li>
            </ul>
          </div>
        </div>
        

        <hr className="border-top border-light mt-4" />
        <p className="text-center mb-0">&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
