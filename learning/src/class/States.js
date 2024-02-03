import React, { Component } from 'react'

export default class States extends Component {

    state = {
        value: 0
    }

    increment = () => {
        this.setState((prev) => {
            return {
                value: prev.value +1
            }
        })
    }

    decrement = () => {
        this.setState((prev) => {
            return{
                value: prev.value -1
            }
        })
    }

  render() {
    return (
      <>
        <button onClick={this.decrement}><h1>-</h1></button>
        <h1>{this.state.value}</h1>
        <button onClick={this.increment}><h1>+</h1></button>
      </>
    )
  }
}
