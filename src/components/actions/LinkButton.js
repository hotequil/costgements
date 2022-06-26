function LinkButton({ click, text }) {
  return <button onClick={click} className="link">{text}</button>
}

export default LinkButton
