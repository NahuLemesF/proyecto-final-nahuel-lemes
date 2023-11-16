import React, { useContext } from 'react'
import './Task.css'

import { ToDosContext } from '../../../context/todos'
import { deleteTask, updateTask } from '../../../services/todos'

export const Task = ({ task }) => {
  const { dispatch } = useContext(ToDosContext)

  const iconCompleted = task.isCompleted ? <img src='src\assets\img\check-icon.svg' alt='Check' /> : <img src='src\assets\img\uncheck-icon.svg' alt='Check' />

  const handleDeleteTask = (event) => {
    deleteTask(task._id)
      .then(deletedTask => {
        window.alert('Se eliminó la tarea ' + deletedTask.name)
        dispatch({ type: 'DELETE_TASK', payload: deletedTask._id })
        event.target.reset()
      })
  }

  const handleToggleStatus = () => {
    // Cambia el estado de Pendiente a Finalizada o viceversa
    const updatedTask = { ...task, isCompleted: !task.isCompleted }
    updateTask(updatedTask)
      .then(updatedTask => {
        window.alert('Su tarea ' + updatedTask.name + ' ha sido ' + updatedTask + '.')
        dispatch({ type: 'UPDATE_TASK', payload: updatedTask })
      })
  }

  // Corrige formato de fecha
  const finishDate = new Date(task.finishDate)
  const formattedFinishDate = finishDate.toLocaleDateString()

  return (
    <tr className='task__table'>
      <td>{task.name}</td>
      <td>{task.description}</td>
      <td>{task.isCompleted ? 'Finalizada' : 'Pendiente'}</td>
      <td>{formattedFinishDate}</td>
      <td>
        <button className='task__button' onClick={() => dispatch({ type: 'SET_CURRENT_TASK', payload: task })}><img src='src\assets\img\edit-icon.svg' alt='Edit' /></button>
        <button className='task__button' onClick={handleDeleteTask}><img src='src\assets\img\delete-icon.svg' alt='Delete' /></button>
        <button className='task__button' onClick={handleToggleStatus}>{iconCompleted}</button>
      </td>
    </tr>
  )
}
