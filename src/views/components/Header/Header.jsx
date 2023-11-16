import { Link } from 'react-router-dom'
import './Header.css'

export const Header = () => {
  return (
    <header className='header'>
      <div className='header__banner'>
        <img className='header__banner--logo' src='src/assets/img/logo.svg' alt='Capi Logo' />
        <img src='src/assets/img/brand.png' alt='banner' className='header__banner--brand' />
      </div>

      <nav className='header__nav'>
        <ul>
          <li>
            <Link className='header__nav-link' to='#'>Inicio</Link>
          </li>
          <li>
            <Link className='header__nav-link' to='/login'>Iniciar Sesión</Link>
          </li>
          <li>
            <Link className='header__nav-link' to='/register'>Registrarse</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
