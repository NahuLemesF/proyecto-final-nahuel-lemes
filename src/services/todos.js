import { API_TODO } from '../env'

export const createTask = (body) => {
  return fetch(API_TODO, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  })
    .then(response => response.json())
    .then(response => {
      if (response.error) {
        console.error(response.error)
        throw new Error('Error al crear la tarea')
      }
      return response.todo
    })
    .catch(error => {
      console.error(error)
      throw new Error('Error al procesar la respuesta del servidor al crear la tarea')
    })
}

export const getTasks = () => {
  return fetch(API_TODO, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(response => response.json())
    .then(response => response.todos)
}

export const deleteTask = (taskId) => {
  return fetch(API_TODO + '/' + taskId, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(response => response.json())
    .then(response => response.todo)
}

export const updateTask = (body) => {
  return fetch(API_TODO, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  })
    .then(response => response.json())
    .then(response => response.todo)
}
