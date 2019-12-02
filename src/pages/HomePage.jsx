import React, { useState } from 'react'

const HomePage = () => {
  const [input, setInput] = useState([])

  const inputClicked = val => {
    setInput(prev => {
      return prev + val
    })
  }

  const calculate = () => {
    console.log('calculating')
    if (input[1] === '-') {
      console.log('yes')
      setInput(parseInt(input[0]) - parseInt(input[2]))
    } else if (input[1] === '+') {
      setInput(parseInt(input[0]) + parseInt(input[2]))
    } else if (input[1] === '*') {
      setInput(parseInt(input[0]) * parseInt(input[2]))
    } else if (input[1] === '/') {
      setInput(parseInt(input[0]) / parseInt(input[2]))
    }
  }

  const clearState = () => {
    setInput([])
  }
  return (
    <>
      <div className="app">
        <div className="calc-wrapper">
          <div className="input">{input}</div>

          <div className="row">
            <button className="clear-button" onClick={() => clearState()}>
              clear
            </button>
          </div>
          <div className="row">
            <button className="btn-numbers" onClick={() => inputClicked(7)}>
              7
            </button>
            <button className="btn-numbers" onClick={() => inputClicked(8)}>
              8
            </button>
            <button className="btn-numbers" onClick={() => inputClicked(9)}>
              9
            </button>
            <button className="btn-none" onClick={() => inputClicked('/')}>
              /
            </button>
          </div>

          <div className="row">
            <button className="btn-numbers" onClick={() => inputClicked(4)}>
              4
            </button>
            <button className="btn-numbers" onClick={() => inputClicked(5)}>
              5
            </button>
            <button className="btn-numbers" onClick={() => inputClicked(6)}>
              6
            </button>
            <button className="btn-none" onClick={() => inputClicked('*')}>
              x
            </button>
          </div>
          <div className="row">
            <button className="btn-numbers" onClick={() => inputClicked(1)}>
              1
            </button>
            <button className="btn-numbers" onClick={() => inputClicked(2)}>
              2
            </button>
            <button className="btn-numbers" onClick={() => inputClicked(3)}>
              3
            </button>
            <button className="btn-none" onClick={() => inputClicked('-')}>
              -
            </button>
          </div>
          <div className="row">
            <button className="btn-numbers" onClick={() => inputClicked(0)}>
              0
            </button>
            <button className="btn-none" onClick={() => calculate()}>
              =
            </button>
            <button className="btn-none" onClick={() => inputClicked('+')}>
              +
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
export default HomePage
