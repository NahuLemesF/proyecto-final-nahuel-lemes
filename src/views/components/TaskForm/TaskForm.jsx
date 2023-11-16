import './TaskForm.css'
import { Input } from '../Input/Input'
import { useContext } from 'react'
import { ToDosContext } from '../../../context/todos'
import { createTask, updateTask } from '../../../services/todos'

export const TaskForm = () => {
  const { state, dispatch } = useContext(ToDosContext)

  const text = state.currentTask ? 'Actualizar' : 'Crear nueva'

  const userId = globalThis.localStorage.getItem('userId')

  const handleSubmit = (event) => {
    event.preventDefault()
    let body = {
      isCompleted: false,
      userId
    }
    for (const element of event.target.elements) {
      if (element.name) {
        body = { ...body, [element.name]: element.value }
      }
    }
    state.currentTask ? update(body, event) : create(body, event)
  }

  const create = (body, event) => {
    createTask(body)
      .then(task => {
        window.alert('Se ha creado la tarea ' + task.name)
        dispatch({ type: 'CREATE_TASK', payload: task })
        event.target.reset()
      })
      .catch(error => {
        console.error('Error al crear la tarea:', error)
      })
  }

  const update = (body, event) => {
    updateTask({ ...body, _id: state.currentTask._id })
      .then(task => {
        window.alert('Se ha actualizado la tarea ' + task.name)
        dispatch({ type: 'UPDATE_TASK', payload: task })
        dispatch({ type: 'SET_CURRENT_TASK', payload: null })
        event.target.reset()
      })
  }

  return (
    <>
      <form className='task__form' onSubmit={handleSubmit}>
        <h2 className='task__form-title'>{text} tarea:</h2>
        <fieldset className='task__form-inputs'>
          <Input
            className='input'
            type='text'
            name='name'
            id='name'
            textLabel='Nombre de la tarea:'
            required defaultValue={state.currentTask ? state.currentTask.name : ''}
          />
          <Input
            className='input'
            type='text'
            name='description'
            id='description'
            textLabel='Descripción:'
            required defaultValue={state.currentTask ? state.currentTask.description : ''}
          />
          <Input
            className='input'
            type='date'
            name='finishDate'
            id='date'
            textLabel='Fecha de Finalización:'
            required defaultValue={state.currentTask ? state.currentTask.finishDate : ''}
          />
        </fieldset>
        <button className='button__global' type='submit'>
          {text}
        </button>
      </form>
    </>
  )
}
