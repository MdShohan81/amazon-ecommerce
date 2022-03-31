import React from 'react';
import './Header.css';
import logo from '../../images/Logo.svg'

const Header = () => {
    return (
        <nav class="navbar navbar-expand-md navbar-dark bg-dark header">
        <div class="container-fluid">
        <a href="/"> <img src={logo} alt="brand" /></a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
              <li class="nav-item">
              <a class="nav-link" href="/shop">Shop</a>
              </li>
              <li class="nav-item">
              <a class="nav-link" href="/orders">Orders</a>
              </li>
              <li class="nav-item">
              <a class="nav-link" href="/inventory">Inventory</a>
              </li>
              <li class="nav-item">
              <a class="nav-link" href="/about">About</a>
              </li>
            </ul>
            
          </div>
        </div>
      </nav>
    );
};

export default Header;