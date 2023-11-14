import { useContext } from 'react'
import { ToDosContext } from '../../context/todos'
import { Navigate } from 'react-router-dom'

export const ProtectedRoute = ({ children }) => {
  const { state } = useContext(ToDosContext)
  if (!state.isLoggedUser) {
    return <Navigate to='/login' replace />
  }
  return children
}
