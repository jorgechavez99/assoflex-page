import React from 'react'
import logoWhite from '../../public/assets/logo-assoflex-white.png'
import logoBlanco from '/assets/logo-assoflex-blanco.png'
const NavBar = () => {
  return (
    <div className='navBar-container'>
      <div className='img-container'>
        <img src={logoBlanco} alt="logo-assoflex" />
      </div>
      <ul>
        <li>INICIO</li>
        <li> NOSOTROS</li>
        <li>CASOS DE ÉXITO</li>
        <li>PRODUCTOS</li>
        <li>SERVICIOS</li>
      </ul>
      <button className='btn-contacto'>CONTACTANOS</button>
    </div>
  )
}

export default NavBar
