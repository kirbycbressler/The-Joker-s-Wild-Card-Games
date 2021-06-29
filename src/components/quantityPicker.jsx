import React, { Component } from 'react'
import './quantityPicker.css'

class QuantityPicker extends Component {
  state = {
    value: 1
  }
  render () {
    return (
      <div className='quantity-picker'>
        <button onClick={this.increase} className='btn btn-sm btn-light'>
          +
        </button>
        <section className='value'>{this.state.value}</section>
        <button onClick={this.decrease} className='btn btn-sm btn-light'>
          -
        </button>
      </div>
    )
  }
  increase = () => {
    // let current = this.state.value + 1 (for validations)
    // current = current + 1
    // current += 1

    this.setState({ value: this.state.value + 1 })
  }
  decrease = () => {
    if (this.state.value > 1) {
      this.setState({ value: this.state.value - 1 })
    } else {
      console.log('this number cant be negative')
    }
  }
}

export default QuantityPicker

// investigate javascript functions vs arrow functions
