import { createBrowserRouter } from 'react-router-dom'
import { Layout } from '../components/Layout/Layout'
import { Home } from '../pages/Home.jsx'
import { Login } from '../pages/Login.jsx'
import { Register } from '../pages/Register.jsx'
import { ProtectedRoute } from './ProtectedRoute.jsx'

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Layout,
    children: [
      {
        path: '',
        element: (
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        )
      },
      {
        path: 'login',
        isLogged: true,
        Component: Login
      },
      {
        path: 'register',
        isLogged: false,
        Component: Register
      }
    ]
  }
])
