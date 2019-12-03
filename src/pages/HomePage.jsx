import React, { useState } from 'react'

const HomePage = () => {
  const [display, setDisplay] = useState('')
  const [firstNumber, setFirstNumber] = useState(0)
  const [operand, setOperand] = useState('')
  const [runningTotal, setRunningTotal] = useState(0)
  const displayClicked = val => {
    setDisplay(prev => {
      return prev + val.toString()
    })
  }
  // const calculate = () => {
  //   console.log('calculating')
  //   if (display[1] === '-') {
  //     console.log('yes')
  //     setDisplay(parseInt(display[0]) - parseInt(display[2]))
  //   } else if (display[1] === '+') {
  //     setDisplay(parseInt(display[0]) + parseInt(display[2]))
  //   } else if (display[1] === '*') {
  //     setDisplay(parseInt(display[0]) * parseInt(display[2]))
  //   } else if (display[1] === '/') {
  //     setDisplay(parseInt(display[0]) / parseInt(display[2]))
  //   }
  // }
  const operandButtonPressed = op => {
    setOperand(op)
    setFirstNumber(display)
    setDisplay('')
  }

  const getResult = operand => {
    let total = runningTotal
    console.log({ total, display, operand })
    switch (operand) {
      case '+':
        total = parseInt(firstNumber) + parseInt(display)
        break
      case '-':
        total = parseInt(firstNumber) - parseInt(display)
        break
      case '*':
        total = parseInt(firstNumber) * parseInt(display)
        break
      case '/':
        total = parseInt(firstNumber) / parseInt(display)
        break
    }
    return total
  }

  const calculateResult = () => {
    let total = getResult(operand)
    console.log({ total })
    setDisplay(total)
    setRunningTotal(total)
  }

  const clearState = () => {
    setDisplay([])
    setFirstNumber(0)
    setOperand('')
  }
  return (
    <>
      <div className="app">
        <div className="calc-wrapper">
          <div className="display">{display}</div>

          <div className="row">
            <button className="clear-button" onClick={() => clearState()}>
              clear
            </button>
          </div>
          <div className="row">
            <button className="btn-numbers" onClick={() => displayClicked(7)}>
              7
            </button>
            <button className="btn-numbers" onClick={() => displayClicked(8)}>
              8
            </button>
            <button className="btn-numbers" onClick={() => displayClicked(9)}>
              9
            </button>
            <button
              className="btn-none"
              onClick={() => operandButtonPressed('/')}
            >
              /
            </button>
          </div>

          <div className="row">
            <button className="btn-numbers" onClick={() => displayClicked(4)}>
              4
            </button>
            <button className="btn-numbers" onClick={() => displayClicked(5)}>
              5
            </button>
            <button className="btn-numbers" onClick={() => displayClicked(6)}>
              6
            </button>
            <button
              className="btn-none"
              onClick={() => operandButtonPressed('*')}
            >
              x
            </button>
          </div>
          <div className="row">
            <button className="btn-numbers" onClick={() => displayClicked(1)}>
              1
            </button>
            <button className="btn-numbers" onClick={() => displayClicked(2)}>
              2
            </button>
            <button className="btn-numbers" onClick={() => displayClicked(3)}>
              3
            </button>
            <button
              className="btn-none"
              onClick={() => operandButtonPressed('-')}
            >
              -
            </button>
          </div>
          <div className="row">
            <button className="btn-numbers" onClick={() => displayClicked(0)}>
              0
            </button>
            <button className="btn-none" onClick={() => calculateResult()}>
              =
            </button>
            <button
              className="btn-none"
              onClick={() => operandButtonPressed('+')}
            >
              +
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
export default HomePage
