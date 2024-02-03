import React, { useEffect, useState } from 'react'

const UseEffect = () => {

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

    const paraStyling = {
        paddingTop: "10px"
    }

    const [counter, setCounter] = useState(0);

    useEffect(() => {
        console.log("Components mounting");
        return () => {
            console.log("Components unmounting!");
        }
    }, []);

    useEffect(() => {
        console.log("Component updation");
    }, [counter])

  return (
    <>
        <div style={containerStyling}>
            <button style={buttonStyling} onClick={() => counter > 0 ? setCounter(counter-1) : 0}>-</button>
            <p style={paraStyling}>{counter}</p>
            <button style={buttonStyling} onClick={() => setCounter(counter+1)}>+</button>
        </div>
    </>
  )
}

export default UseEffect
