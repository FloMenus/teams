import React from 'react'
import './Counter.css'

class Counter extends React.Component {



  render() {
    return (
      <div className="counter-div">
        <button className="button" id="minus-button" onClick={this.props.substract}>-</button>
        <h2>{this.props.count}</h2>
        <button className="button" id="plus-button" onClick={this.props.increment} >+</button>
      </div>
    )
  }
}

export default Counter