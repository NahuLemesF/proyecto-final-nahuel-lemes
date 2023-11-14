import { Input } from '../Input/Input'

export const SignInForm = () => {
  return (
    <form action=''>
      <fieldset>
        <Input id='nombre' name='nombre' textLabel='Nombre:' type='text' />
        <Input id='apellido' name='apellido' textLabel='Apellido' type='text' />
        <Input type='text' name='email' id='email' textLabel='E-mail:' />
        <Input type='text' name='password' id='password' textLabel='Contraseña:' />
        <button>Regístrarme</button>
      </fieldset>
    </form>

  )
}
