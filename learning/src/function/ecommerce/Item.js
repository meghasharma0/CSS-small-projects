import React, { useContext } from 'react'
import { ItemContext } from '../context/EcommerceContext'

const Item = (props) => {

  const cntxt = useContext(ItemContext);

  const handleClick = () => {
    cntxt.setCart([
      ...cntxt.cart,
      { name: props.name, price: props.price }
    ])
    console.log(cntxt.cart)
  }

  return (
    <div style={{border: "1px solid black", padding: "10px", margin: "10px"}}>
      <h2>{props.name}</h2>
      <p>price : Rs.{props.price}</p>
      <button onClick={handleClick}>Add to cart</button>
    </div>
  )
}

export default Item
