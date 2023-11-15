import { Outlet } from 'react-router-dom'
import './Layout.css'
import { Header } from '../Header/Header'
import { Footer } from '../Footer/Footer'
import { WelcomeMessage } from '../WelcomeMessage/WelcomeMessage'

export const Layout = () => {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <WelcomeMessage />
        <Outlet />
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  )
}
