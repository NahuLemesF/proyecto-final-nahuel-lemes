import { Link } from 'react-router-dom'
import './Header.css'

export const Header = () => {
  return (
    <header className='header'>
      <div className='header__banner'>
        <img className='header__banner--logo' src='src/assets/img/logo.svg' alt='Capi Logo' />
        <img src='src/assets/img/brand.svg' alt='' className='header__banner--brand' />
      </div>

      <nav className='header__nav'>
        <ul>
          <li>
            <Link>Inicio</Link>
          </li>
          <li>
            <Link>Servicios</Link>
          </li>
          <li>
            <Link>Iniciar Sesion</Link>
          </li>
          <li>
            <Link>Registrarse</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
