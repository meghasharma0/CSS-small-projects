import React, { useContext } from 'react'
import { ItemContext } from '../context/EcommerceContext'

const Cart = () => {

  const cntxt = useContext(ItemContext);

  return (
    <div style={{border: "2px solid green", padding: "10px", margin: "10px"}}>
    {
      cntxt.cart.map((itm) => {
        return (
          <>
          <h2>{itm.name}</h2>
          <p>price : Rs.{itm.price}</p>
          </>
        )
      })
    }
    </div>
  )
}

export default Cart
