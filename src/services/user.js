import { API_USER } from '../env.js'

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
