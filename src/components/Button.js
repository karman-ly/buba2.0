import "./Button.css"

export default function Button({handleClick}) {
  return (
      <div className="button-container">
        <button onClick={handleClick}>Press me (only for Sony)</button>
      </div>
  )
}
