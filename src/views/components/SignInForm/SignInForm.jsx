import { Input } from '../Input/Input'
import './SignInForm.css'
import { createUser } from '../../../services/user'
import { Link, useNavigate } from 'react-router-dom'

export const SignInForm = () => {
  const navigate = useNavigate()

  const handleSubmitForm = (event) => {
    event.preventDefault()
    let body = {}
    for (const element of event.target.elements) {
      if (element.name) {
        body = { ...body, [element.name]: element.value }
      }
    }
    create(body, event)
  }

  const create = (body, event) => {
    createUser(body)
      .then(user => {
        window.alert('Se creó correctamente el usuario ' + user.firstName + '. Ya puedes iniciar sesión.')
        event.target.reset()
        navigate('/login')
      })
      .catch(error => {
        console.error('Error al crear el usuario:', error)
        window.alert('No se pudo crear el usuario. Por favor, inténtelo nuevamente. ')
      })
      .finally(() => {
        event.target.reset()
      })
  }

  return (
    <>
      <div className='card'>

        <form onSubmit={handleSubmitForm} className='card__form'>
          <fieldset className='card__form-register'>
            <Input
              type='text'
              id='nombre'
              name='firstName'
              textLabel='Nombre:'
              required
            />
            <Input
              type='text'
              id='apellido'
              name='lastName'
              textLabel='Apellido'
              required
            />
            <Input
              type='text'
              id='email'
              name='email'
              textLabel='E-mail:'
              required
            />
            <Input
              type='password'
              id='password'
              name='password'
              textLabel='Contraseña:'
              required
            />
            <button type='submit'>
              Regístrarme
            </button>
          </fieldset>
          <span>¿Ya tienes una cuenta? <Link to='/login'>Inicia Sesión</Link></span>
        </form>

      </div>
    </>
  )
}
