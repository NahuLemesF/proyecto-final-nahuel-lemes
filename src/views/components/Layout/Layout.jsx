import { Outlet } from 'react-router-dom'
import './Layout.css'
import { Header } from '../Header/Header'
import { Footer } from '../Footer/Footer'

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
        <Footer />
      </footer>
    </>
  )
}
