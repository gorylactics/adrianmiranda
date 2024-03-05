// NavBar.jsx
import React from 'react';
import Logo from '../atoms/Logo.jsx';
import navbar from './navbar.module.css';
import Menu from '../atoms/Menu.jsx';
import opciones from '../../../opciones.json'; 

const NavBar = () => {
  return (
    <>
      <div className={navbar.contenedor}>
        <div className={navbar.navbar}>
          <Logo />
          <Menu menuOptions={opciones} />
        </div>
      </div>
    </>
  );
}

export default NavBar;
