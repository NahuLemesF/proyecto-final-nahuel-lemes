import './TasksList.css'
import { Task } from '../Task/Task'

export const TasksList = ({ tasks }) => {
  return (
    <div className='tasks__list'>
      <h2 className='tasks-list__title'>Mis tareas</h2>
      <table className='tasks-list__table'>
        <thead>
          <tr>
            <th>Nombre de la tarea</th>
            <th>Descripción</th>
            <th>Estado</th>
            <th>Fecha</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {tasks &&
          tasks.map((task) => (
            <Task key={task._id} task={task} />
          ))}
        </tbody>
      </table>
    </div>
  )
}
