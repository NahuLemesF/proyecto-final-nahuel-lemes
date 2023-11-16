import './WelcomeMessage.css'

export const WelcomeMessage = () => {
  return (
    <main className='welcome'>
      <div className='welcome__presentation'>
        <h1>Bienvenido a</h1>
        <img src='src/assets/img/brand.png' alt='banner-logo' className='welcome__banner--brand' />
        <p>El administrador de tareas que simplifica tu día.</p>
      </div>
      <ul className='welcome__presentation-list'>
        <li>Organiza tus tareas de manera eficiente.</li>
        <li>Establece fechas límite y prioridades.</li>
        <li>Marca las tareas completadas.</li>
      </ul>

      <div className='welcome__getStarted'>
        <h2>¡Comienza Ahora!</h2>
      </div>
    </main>
  )
}
