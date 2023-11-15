import { Input } from '../Input/Input'
import './SignInForm.css'
import { createUser } from '../../../services/user'

export const SignInForm = () => {
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
        window.alert('Se creó correctamente el usuario ' + user.firstName)
        event.target.reset()
      })
  }

  return (
    <form onSubmit={handleSubmitForm} className='card' action=''>
      <fieldset>
        <Input type='text' id='nombre' name='firstName' textLabel='Nombre:' required />
        <Input type='text' id='apellido' name='lastName' textLabel='Apellido' required />
        <Input type='text' id='email' name='email' textLabel='E-mail:' required />
        <Input type='password' id='password' name='password' textLabel='Contraseña:' required />
        <button type='submit'>Regístrarme</button>
      </fieldset>
    </form>

  )
}
