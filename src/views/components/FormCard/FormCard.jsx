import { Link } from 'react-router-dom'
import { LoginForm } from '../LoginForm/LoginForm'
import { SignInForm } from '../SignInForm/SignInForm'
import './FormCard.css'

export const FormCard = ({ title, isLogin = true, span }) => {
  return (
    <div className='card'>
      <h1>{title}</h1>
      {isLogin
        ? (
          <>
            <LoginForm />
            <span>¿No tienes una cuenta? <Link to='/register'>Regístrate</Link></span>
          </>

          )
        : (
          <>
            <SignInForm />
            <span>¿Ya tienes una cuenta? <Link to='/login'>Inicia Sesión</Link></span>
          </>
          )}

    </div>
  )
}
