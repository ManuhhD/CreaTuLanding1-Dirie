import React from 'react';
import CartWidget from './cartwidget.js';

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Mi Tienda
        </a>
        <div className="navbar-nav">
          <a className="nav-link" href="#">Inicio</a>
          <a className="nav-link" href="#">Productos</a>
          <a className="nav-link" href="#">Contacto</a>
        </div>
        <CartWidget />
      </div>
    </nav>
  );
}

export default NavBar;
