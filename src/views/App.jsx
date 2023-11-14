import { RouterProvider } from 'react-router-dom'
import { router } from './routes'
import { ToDosProvider } from '../context/todos'

export const App = () => {
  return (
    <ToDosProvider>
      <RouterProvider router={router} />
    </ToDosProvider>
  )
}
