import React, { useState } from "react"
import { Link } from "react-router-dom"
import Categories from "../../components/MainPage/Categories"

const Navbar = () => {
  const [MobileMenu, setMobileMenu] = useState(false)
  return (
    <>
      <header className='header'>
        <div className="navbar-container">
            <ul className={MobileMenu ? "nav-links-MobileMenu" : "link f_flex capitalize"} onClick={() => setMobileMenu(false)}>
              
              <li>
                <Link to='/'>home</Link>
              </li>
              <li>
                <Link to='/agregar'>Agregar tarea</Link>
              </li>
              <li>
                <Link to='/favoritos'>Favoritos</Link>
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
      </header>
    </>
  )
}

export default Navbar
