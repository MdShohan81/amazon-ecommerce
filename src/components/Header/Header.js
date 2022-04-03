import React from 'react';
import './Header.css';
import logo from '../../images/Logo.svg'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav class="navbar navbar-expand-md navbar-dark bg-dark header">
        <div class="container-fluid">
        <Link to="/"> <img src={logo} alt="brand" /></Link>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
              <li class="nav-item">
              <Link class="nav-link" to="/shop">Shop</Link>
              </li>
              <li class="nav-item">
              <Link class="nav-link" to="/orders">Orders</Link>
              </li>
              <li class="nav-item">
              <Link class="nav-link" to="/inventory">Inventory</Link>
              </li>
              <li class="nav-item">
              <Link class="nav-link" to="/about">About</Link>
              </li>
            </ul>
            
          </div>
        </div>
      </nav>
    );
};

export default Header;