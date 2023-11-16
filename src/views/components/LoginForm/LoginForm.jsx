import { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Input } from '../Input/Input'
import './LoginForm.css'
import { authenticateUser } from '../../../services/user'
import { ToDosContext } from '../../../context/todos'

export const LoginForm = () => {
  const { dispatch } = useContext(ToDosContext)
  const navigate = useNavigate()

  const authenticate = (body, event) => {
    authenticateUser(body)
      .then(user => {
        const userId = user._id
        globalThis.localStorage.setItem('userId', userId)
        dispatch({ type: 'LOGIN_USER' })
        navigate('/')
      })
      .catch(error => {
        console.error('Error al iniciar sesión:', error)
        let errorMessage = 'El usuario no existe o fue mal ingresado. Por favor, inténtelo nuevamente. '

        if (error.response && error.response.data) {
          errorMessage = error.response.data.message || errorMessage
        }

        window.alert(errorMessage)
      })
      .finally(() => {
        event.target.reset()
      })
  }

  const handleSubmitLogin = (event) => {
    event.preventDefault()
    let body = {}
    for (const element of event.target.elements) {
      if (element.name) {
        body = { ...body, [element.name]: element.value }
      }
    }
    authenticate(body, event)
  }

  return (
    <>
      <div className='card'>
        <form onSubmit={handleSubmitLogin} className='card__form'>
          <fieldset>
            <Input
              className='input'
              type='text'
              name='email'
              id='email'
              textLabel='E-mail:'
            />
            <Input
              className='input'
              type='password'
              name='password'
              id='password'
              textLabel='Contraseña:'
            />
            <button type='submit'>
              Iniciar Sesión
            </button>
          </fieldset>
          <span>¿No tienes una cuenta? <Link to='/register'>Regístrate</Link></span>
        </form>
      </div>
    </>
  )
}
