import React from "react"
import "./style.css"

const Footer = () => {
  return (
    <>
      <footer>
        <div className='container grid2'>
          <div className='box'>
            <h1>WORK HOOD</h1>
            <p>Work Hood, seamos el robin hood de nuestra comunidad, ayudemos a los que lo necesitan.</p>
            <div className='icon d_flex'>
              <div className='img d_flex'>
                <i class='fa-brands fa-google-play'></i>
                <span>Google Play</span>
              </div>
              <div className='img d_flex'>
                <i class='fa-brands fa-app-store-ios'></i>
                <span>App Store</span>
              </div>
            </div>
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
              <li>C/ de los junior fullstack, Barcelona, 012345, España </li>
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
