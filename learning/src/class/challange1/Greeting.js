import React, { Component } from 'react'

export default class Greeting extends Component {
  render() {

    const date = new Date();
    const hours = date.getHours();

    let greetingWish;

    if (hours < 12){
        greetingWish = "morning";
    }else if (hours >= 12 && hours < 17){
        greetingWish = "evening";
    }else{
        greetingWish = "night";
    }

    return (
      <div>Good {greetingWish} to you, sir or madam!</div>
    )
  }
}
