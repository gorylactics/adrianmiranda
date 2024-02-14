import React from 'react'
import Logo from '../atoms/Logo.jsx'
import navbar from './navbar.module.css'

const NavBar = () => {
  return (
    <>
    <div className={navbar.contenedor}>
      <div className={navbar.navbar}>
        <Logo />
      </div>
    </div>
    </>
  )
}

export default NavBar
