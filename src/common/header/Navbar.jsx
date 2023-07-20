import React, { useState } from "react"
import { Link } from "react-router-dom"

const Navbar = () => {
  const [MobileMenu, setMobileMenu] = useState(false)
  return (
    <>
      <header className='header'>
        <div className='container d_flex'>
          <div className='catgrories d_flex'>
            <span class='fa-solid fa-border-all'></span>
            <h4>
              Categorias <i className='fa fa-chevron-down'></i>
            </h4>
          </div>

          <div className='navlink'>
            <ul className={MobileMenu ? "nav-links-MobileMenu" : "link f_flex capitalize"} onClick={() => setMobileMenu(false)}>
              
              <li>
                <Link to='/'>home</Link>
              </li>
              <li>
                <Link to='/alimentacion'>páginas</Link>
              </li>
              <li>
                <Link to='/user'>usuario</Link>
              </li>
              <li>
                <Link to='/vendor'>vendedor</Link>
              </li>
              <li>
                <Link to='/track'>orden</Link>
              </li>
              <li>
                <Link to='/contact'>contacto</Link>
              </li>
            </ul>

            <button className='toggle' onClick={() => setMobileMenu(!MobileMenu)}>
              {MobileMenu ? <i className='fas fa-times close home-btn'></i> : <i className='fas fa-bars open'></i>}
            </button>
          </div>
        </div>
      </header>
    </>
  )
}

export default Navbar
