export const Input = ({ name, id, type, textLabel }) => {
  return (
    <>
      <div className='login-input'>
        <label htmlFor={id}>{textLabel}</label>
        <input name={name} type={type} id={id} />
      </div>
    </>
  )
}
