import React from 'react'

const Footer = () => {
  return (
    <div className='footer-container'>


      <div className='footer-logo'>
        <a href="https://www.assoflex.com" >
          <img src="/assets/logo-assoflex-black.png" alt="logo-assoflex" />
        </a>
      </div>


      <ul>
      <li>Contactanos</li>
          <li>Dirección:   Urbanización Tacna F-36</li>
          <li>Telefono: 962075545</li>
          <li>Email:  ventas@assoflex.com</li>
          <li>Tacna - Perú</li>
      </ul>



      <div>
        {/* <p>Copyright © Assoflex Software 2024. Todos los derechos reservados.</p> */}
      </div>

    </div>
  )
}

export default Footer
