import React from 'react'
import adrianLogo from '../../../assets/img/logo_adrian_miranda_final_3.png'
import logo from './logo.module.css'
import logoJs from './Logo.js'

const Logo = () => {
  return (
    <div>
      <img src={adrianLogo} alt="logotipo" className={logo.logo}/>
      <script  src={logoJs}></script>
    </div>
  )
}

export default Logo
