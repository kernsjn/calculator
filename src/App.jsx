import React, { useState } from 'react'
import Button from './components/Button'
import Input from './components/Input'
import ClearButton from './components/ClearButton'

const App = props => {
  const [input, setInput] = useState()
  const [clear, setClear] = useState()
  const addToInput = val => {
    console.log(val)
  }
  const clearInput = () => {
    console.log()
  }

  return (
    <>
      <div className="app">
        <div className="calc-wrapper">
          <Input input={props.input}>0</Input>
          <div className="row">
            <ClearButton handleClear={props.clear}>Clear</ClearButton>
          </div>

          <div className="row">
            <Button handleClick={addToInput}>7</Button>
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
            <Button handleClick={addToInput}>=</Button>
            <Button handleClick={addToInput}>+</Button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
