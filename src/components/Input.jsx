import React, { useState } from 'react'

const Input = props => {
  const [input, setInput] = useState([])
  return <div className="input">{props.input}</div>
}

export default Input
