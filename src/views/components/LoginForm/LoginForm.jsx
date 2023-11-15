import { Link, useNavigate } from 'react-router-dom'
import { Input } from '../Input/Input'
import './LoginForm.css'
import { authenticateUser } from '../../../services/user'

export const LoginForm = () => {
  const navigate = useNavigate()

  const authenticate = (body, event) => {
    authenticateUser(body)
      .then(user => {
        const userId = user._id
        globalThis.localStorage.setItem('userId', userId)
        navigate('/')
      })
  }

  const handleSubmitLogin = (event) => {
    event.preventDefault()
    let body = {}
    for (const element of event.target.elements) {
      if (element.name) {
        body = { ...body, [element.name]: element.value }
      }
      authenticate(body, event)
    }
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
              type='text'
              name='password'
              id='password'
              textLabel='Contraseña:'
            />
            <button type='submit'>
              Iniciar Sesión
            </button>
          </fieldset>
        </form>
        <span>¿No tienes una cuenta? <Link to='/register'>Regístrate</Link></span>
      </div>
    </>
  )
}
