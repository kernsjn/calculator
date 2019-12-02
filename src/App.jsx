import React, { useState } from 'react'
import Button from './components/Button'
import Input from './components/Input'
import ClearButton from './components/ClearButton'

const App = props => {
  return (
    <>
      <div className="app">
        <div className="calc-wrapper">
          <Input input={props.input}>0</Input>
          <div className="row">
            <ClearButton handleClear={props.handleClear}>Clear</ClearButton>
          </div>

          <div className="row">
            <Button handleClick={props.addInput}>7</Button>
            <Button handleClick={props.addInput}>8</Button>
            <Button handleClick={props.addInput}>9</Button>
            <Button handleClick={props.addInput}>/</Button>
          </div>
          <div className="row">
            <Button handleClick={props.addInput}>4</Button>
            <Button handleClick={props.addInput}>5</Button>
            <Button handleClick={props.addInput}>6</Button>
            <Button handleClick={props.addInput}>x</Button>
          </div>
          <div className="row">
            <Button handleClick={props.addInput}>1</Button>
            <Button handleClick={props.addInput}>2</Button>
            <Button handleClick={props.addInput}>3</Button>
            <Button handleClick={props.addInput}>-</Button>
          </div>
          <div className="row">
            <Button handleClick={props.addInput}>.</Button>
            <Button handleClick={props.addInput}>0</Button>
            <Button handleClick={props.addInput}>=</Button>
            <Button handleClick={props.addInput}>+</Button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
