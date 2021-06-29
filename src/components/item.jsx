import React, { Component } from 'react'
import QuantityPicker from './quantityPicker'
import './item.css'

class Item extends Component {
  state = {}
  render () {
    return (
      <div className='item'>
        <h6> {this.props.prod.title}</h6>
        <label>{this.props.prod.category}</label>
        <img src={'/images/products/' + this.props.prod.image} alt='img'></img>
        <h4> Price: ${this.props.prod.price}</h4>
        <label> </label>
        <p className='description'>{this.props.prod.description}</p>

        <QuantityPicker></QuantityPicker>
        <button className='addToCart'>Add To Cart</button>
      </div>
    )
  }
}

export default Item
