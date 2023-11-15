import { useNavigate } from 'react-router-dom'
import { Input } from '../Input/Input'
import './LoginForm.css'
import { authenticateUser } from '../../../services/user'

export const LoginForm = () => {
  const navigate = useNavigate()

  if (!globalThis.localStorage) {
    globalThis.localStorage = {}
  }

  const authenticate = (body, event) => {
    authenticateUser(body)
      .then(response => response.json())
      .then(response => {
        const userId = response.user._id
        globalThis.localStorage.setItem('userId', userId)
        navigate('/')
          .catch(error => { console.log(error) })
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

    return (
      <form onSubmit={handleSubmitLogin}>
        <fieldset>
          <Input className='input' type='text' name='email' id='email' textLabel='E-mail:' />
          <Input className='input' type='text' name='password' id='password' textLabel='Contraseña:' />
          <button type='submit'>Iniciar Sesión</button>
        </fieldset>
      </form>
    )
  }
}
