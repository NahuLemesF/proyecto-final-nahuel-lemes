import { Link } from 'react-router-dom'
import './Header.css'
import Logo from '/src/assets/img/logo.svg'
import Banner from '/src/assets/img/brand.png'

export const Header = () => {
  return (
    <header className='header'>
      <div className='header__banner'>
        <img className='header__banner--logo' src={Logo} alt='Capi Logo' />
        <img src={Banner} alt='banner' className='header__banner--brand' />
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
