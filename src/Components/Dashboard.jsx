// At the top
import React, { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { Sidenav, Nav } from 'rsuite';
import DashboardIcon from '@rsuite/icons/legacy/Dashboard';
import GroupIcon from '@rsuite/icons/legacy/Group';
import ListIcon from '@rsuite/icons/List';
import '../css/Dashboard.css';

import Signup from '../Components/Signup';
import GamingLaptop from './GamingLaptop';
import BarsDataset from '../Components/Bar';
import PieChartWithCenterLabel from './Pie';
import AddToProduct from './AddToProduct';
import AddCategories from './AddCategories';
import CategoryTable from './pages/Categorytable';
import UserTable from './pages/UserTable';
import ReviewPage from './pages/ReviewPage';
import SavedReview from './pages/SavedReview';

function Dashboard() {
  const navigate = useNavigate();
  const [activeKey, setActiveKey] = useState('1');
  const [expanded] = useState(true);
  const [showAddProduct, setShowAddProduct] = useState(false);
  const [showAddCategories, setShowAddCategories] = useState(false);
  const [reloadFlag, setReloadFlag] = useState(false); // 🔄 NEW

  useEffect(() => {
    const isAdmin = localStorage.getItem('isAdmin');
    if (!isAdmin) {
      navigate('/admins');
    }
  }, [navigate]);

  const handleSelect = (eventKey) => {
    setActiveKey(eventKey);
    setShowAddProduct(false);
  };

  const handleProductAdded = () => {
    setReloadFlag(prev => !prev); // 🔁 Toggle reload
    setShowAddCategories(false);  // ✅ Hide form after adding
  };

  const eventKeyToPage = {
    '1': {
      label: 'Dashboard',
      component: (
        <>
          <BarsDataset />
          <PieChartWithCenterLabel />
        </>
      ),
    },
    '2': {
      label: 'Products',
      component: (
        <>
          {!showAddCategories ? (
            <div className="flex items-center justify-between my-4">
              <span className="text-lg font-semibold text-gray-800">
                Manage your product listings
              </span>
              <button
                onClick={() => setShowAddCategories(true)}
                className="text-white bolder font-semibold px-4 py-2 rounded"
                style={{ backgroundColor: "#76B900", marginLeft: "1000px" }}
              >
                Add Categories
              </button>
            </div>
          ) : (
            <AddCategories goBack={() => setShowAddCategories(false)} onProductAdded={handleProductAdded} />
          )}
          <CategoryTable reloadFlag={reloadFlag} />
        </>
      ),
    },
    
    '3': { label: 'Order', component: <GamingLaptop /> },
    '4': { label: 'Customers', component: <UserTable/> },
    '5': { label: 'Review', component: <SavedReview/>},
  };

  const currentPage = eventKeyToPage[activeKey];
  const breadcrumb =
    activeKey === '1' ? 'Dashboard' : `Dashboard / ${currentPage?.label || ''}`;

  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <div className="sidenav-wrapper">
        <Sidenav>
          <Sidenav.Body>
            <Nav activeKey={activeKey} onSelect={handleSelect}>
              <Nav.Item eventKey="1" icon={<DashboardIcon />}>Dashboard</Nav.Item>

              <p className="d-flex ps-3" style={{ paddingTop: "20px", paddingBottom: "0px" }}>Store Management</p>

              <Nav.Item eventKey="2" className="d-flex ps-3">
                <span style={{ marginLeft: '4px' }}><i className="bi bi-cart4"></i></span>
                <span style={{ marginLeft: '23px' }}>Products</span>
              </Nav.Item>

              <Nav.Item eventKey="3" className="d-flex ps-3">
                <span style={{ marginLeft: '4px' }}><i className="bi bi-bag-fill"></i></span>
                <span style={{ marginLeft: '23px' }}>Order</span>
              </Nav.Item>

              <Nav.Item eventKey="4" icon={<GroupIcon />}>Customers</Nav.Item>

              <Nav.Item eventKey="5" className="d-flex ps-3">
                <span style={{ marginLeft: '4px' }}><i className="bi bi-star"></i></span>
                <span style={{ marginLeft: '23px' }}>Review</span>
              </Nav.Item>
            </Nav>
          </Sidenav.Body>
        </Sidenav>
      </div>

      {/* Page Content */}
      <div className="content-wrapper">
        <div className="page-header">
          <h4>{breadcrumb}</h4>
        </div>
        <div className="page-wrapper">
          {currentPage?.component || <p>Select a page from the navigation.</p>}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
