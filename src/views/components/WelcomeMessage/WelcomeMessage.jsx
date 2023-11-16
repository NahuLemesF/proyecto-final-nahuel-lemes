import './WelcomeMessage.css'

export const WelcomeMessage = () => {
  return (
    <main className='welcome'>
      <div className='welcome__presentation'>
        <h1>Bienvenido a</h1>
        <img src='src/assets/img/brand.png' alt='banner-logo' className='welcome__banner--brand' />
        <p>El administrador de tareas que simplifica tu día.</p>
      </div>
      <div className='welcome__cards'>

        <div className='welcome__cards-article'>
          <article>Organiza tus tareas de manera eficiente.</article>
        </div>
        <div className='welcome__cards-article'>
          <article>Establece fechas límite y prioridades.</article>
        </div>
        <div className='welcome__cards-article'>
          <article>Marca las tareas completadas.</article>
        </div>
      </div>
      <div className='welcome__getStarted'>
        <h2>¡Comienza Ahora!</h2>
      </div>
    </main>
  )
}
