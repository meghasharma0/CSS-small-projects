import React, { useContext } from 'react'
import { MyContext } from './context/useContext'

const Counter = () => {

    const counterState = useContext(MyContext);

    const containerStyling = {
        display: "flex"
    }
    
    const buttonStyling = {
        padding: "5px 20px",
        background: "lightgreen",
        border: "1.5px solid black",
        borderRadius: "5px",
        cursor: "pointer",
        margin: "20px"
    }

  return (
    <>
        <div style={containerStyling}>
            <button style={buttonStyling} onClick={() => counterState.setCount(counterState.count-1)}>-</button>
            <button style={buttonStyling} onClick={() => counterState.setCount(counterState.count+1)}>+</button>
        </div>
    </>
  )
}

export default Counter
