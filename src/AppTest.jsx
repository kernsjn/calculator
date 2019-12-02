import React, { useState } from 'react'
import Button from './components/Button'
import Input from './components/Input'
import ClearButton from './components/ClearButton'

const App = props => {
  const [input, setInput] = useState('')

  const addToInput = val => {
    setInput(prev => {
      return prev + val
    })
    console.log(val)
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
          <Input input={input}></Input>
          <div className="row">
            <button className="clear-button" onClick={() => clearState()}>
              clear
            </button>
          </div>

          <div className="row">
            <button onClick={() => addToInput(7)}>7</button>
            {/* <Button handleClick={addToInput}>7</Button> */}
            <Button handleClick={addToInput}>8</Button>
            <Button handleClick={addToInput}>9</Button>
            <Button handleClick={addToInput}>/</Button>
          </div>
          <div className="row">
            <Button handleClick={addToInput}>4</Button>
            <Button handleClick={addToInput}>5</Button>
            <Button handleClick={addToInput}>6</Button>
            <Button handleClick={addToInput}>x</Button>
          </div>
          <div className="row">
            <Button handleClick={addToInput}>1</Button>
            <Button handleClick={addToInput}>2</Button>
            <Button handleClick={addToInput}>3</Button>
            <Button handleClick={addToInput}>-</Button>
          </div>
          <div className="row">
            <Button handleClick={addToInput}>.</Button>
            <Button handleClick={addToInput}>0</Button>
            <button onClick={() => calculate()}>=</button>
            {/* <Button handleClick={addToInput}>=</Button> */}
            <Button handleClick={addToInput}>+</Button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
