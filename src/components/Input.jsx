import React, { useState } from 'react'

const Input = props => {
  const [input, setInput] = useState([])
  return <div className="input">{props.children}</div>
}

export default Input
