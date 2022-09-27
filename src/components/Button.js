import "./Button.css"

export default function Button({handleClick}) {
  return (
      <button onClick={handleClick}>Press me (only for Sony)</button>
  )
}
