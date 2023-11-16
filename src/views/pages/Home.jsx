import { TaskForm } from '../components/TaskForm/TaskForm'
import { TasksList } from '../components/TasksList/TasksList'
import { useTasks } from '../../hooks/useTasks'
import { useContext } from 'react'
import { ToDosContext } from '../../context/todos'
import { Container } from '../components/Container/Container'

export const Home = () => {
  const { state } = useContext(ToDosContext)

  useTasks()

  return (
    <Container>
      <TaskForm />
      <TasksList tasks={state.tasks} />
    </Container>
  )
}
