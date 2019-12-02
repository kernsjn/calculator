import React from 'react'

const isOperator = val => {
  return !isNaN(val) || val === '.' || val === 'Clear'
}

const Button = props => {
  return (
    <div
      className={`button-wrapper ${
        isOperator(props.children) ? null : 'operator'
      }`}
      onClick={() => props.handleClick(props.addInput)}
    >
      {props.children}
    </div>
  )
}

export default Button
