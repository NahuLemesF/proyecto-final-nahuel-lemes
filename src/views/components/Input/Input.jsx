import './Input.css'

export const Input = ({ name, id, type, textLabel }) => {
  return (
    <>
      <div className='input'>
        <label className='input__label' htmlFor={id}>{textLabel}</label>
        <input className='input__textInput' name={name} type={type} id={id} />
      </div>
    </>
  )
}
