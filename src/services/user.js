import { API_USER } from '../env'

export const createUser = (body) => {
  return fetch(API_USER, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  })
    .then(response => response.json())
    .then(response => response.user)
}

export const authenticateUser = (body) => {
  return fetch(API_USER + '/auth', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  })
    .then(response => response.json())
    .then(response => response.user)
}

// const handleLogin = (event) => {
//   event.preventDefault()
//   fetch(API_URL_USER + '/auth', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({
//       email: event.target.elements.email.value,
//       password: event.target.elements.password.value
//     })
//   })
//     .then((response) => {
//       if (response.ok) {
//         return response.json()
//       } else {
//         throw new Error('Error al iniciar sesión')
//       }
//     })
//     .then((data) => {
//       dispatch({ type: 'LOGIN', payload: data.user })
//       navigate('/home/dashboard')
//     })
//     .catch(error => console.error(error))
// }
