import React from "react"
import logo from "../../components/assets/images/logo.png"
import "./style.css"

const Footer = () => {
  return (
    <>
      <footer>
        <div className='container grid2'>
          <div className='box'>
          <img id="logoheader" src={logo} alt='' /> 
            <p>Work Hood, seamos el robin hood de nuestra comunidad, ayudemos a los que lo necesitan.</p>
          </div>

          <div className='box'>
            <h2>Sobre Nosotros</h2>
            <ul>
              <li>Trabaja con nosotros</li>
              <li>Asociaciones con las que colaboramos</li>
              <li>Terminos & Condiciones</li>
              <li>Política de Privacidad</li>
            </ul>
          </div>
          <div className='box'>
            <h2>Cliente</h2>
            <ul>
              <li>Centro de Ayuda </li>
              <li>Como Comprar </li>
              <li>Número de tu Pedido </li>
              <li>Devoluciones & Reembolso</li>
            </ul>
          </div>
          <div className='box'>
            <h2>Contáctanos</h2>
            <ul>
              <li>C/ de los Junior Fullstack, Barcelona, 012345, España </li>
              <li>Email: workhood.help@gmail.com</li>
              <li>Teléfono: +34 123 456 789</li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
