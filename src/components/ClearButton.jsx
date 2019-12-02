import React, { useState } from 'react'

const ClearButton = props => {
  const [handleClear, setHandleClear] = useState()
  return (
    <div className="clear-button" onClick={props.handleClear}>
      {props.children}
    </div>
  )
}

export default ClearButton
