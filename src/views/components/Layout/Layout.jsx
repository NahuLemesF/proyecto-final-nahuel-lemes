import { Outlet } from 'react-router-dom'
import './Layout.css'
import { Header } from '../Header/Header'

export const Layout = () => {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <Outlet />
      </main>

      <footer>
        <span>Todos los derechos reservados</span>
        <span><a href='#'>Volver al Inicio</a></span>
      </footer>
    </>
  )
}
