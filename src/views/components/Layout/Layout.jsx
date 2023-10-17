import { Link, Outlet } from 'react-router-dom'
import './Layout.css'

export const Layout = () => {
  return (
    <>
      <header>
        <div>
          <img src='#' alt='#' />
          <h1>Sensei Tasks</h1>
        </div>

        <nav>
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
          </ul>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>

      <footer>
        Todos los derechos reservados
      </footer>
    </>
  )
}
