import { useContext, useEffect } from 'react'
import { ToDosContext } from '../context/todos'
import { getTasks } from '../services/todos'

export const useTasks = () => {
  const { dispatch } = useContext(ToDosContext) // Utiliza ToDosContext en lugar de ToDosProvider

  useEffect(() => {
    getTasks().then(tasks => dispatch({ type: 'GET_TASKS', payload: tasks }))
  }, [dispatch])
}
