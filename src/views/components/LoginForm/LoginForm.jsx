import { Input } from '../Input/Input'

export const LoginForm = () => {
  return (
    <form action='' className=''>
      <fieldset>
        <Input className='' type='text' name='email' id='email' textLabel='E-mail:' />
        <Input type='text' name='password' id='password' textLabel='Contraseña:' />
        <button>Iniciar Sesión</button>
      </fieldset>
    </form>
  )
}
