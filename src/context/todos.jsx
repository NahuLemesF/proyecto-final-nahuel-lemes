import { useReducer, createContext } from 'react'
import { reducer, initialState } from '../reducer/todos.js'

export const ToDosContext = createContext()

export const ToDosProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <ToDosContext.Provider value={{ state, dispatch }}>
      {children}
    </ToDosContext.Provider>
  )
}
