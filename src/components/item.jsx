import React, { Component } from 'react'
import QuantityPicker from './quantityPicker'
import './item.css'
import storeContext from '../context/storeContext'

class Item extends Component {
  static contextType = storeContext

  state = {
    quantity: 1
  }
  render () {
    return (
      <div className='item'>
        <h6> {this.props.prod.title}</h6>
        <label>{this.props.prod.category}</label>
        <img src={'/images/products/' + this.props.prod.image} alt='img'></img>
        <h4> Price: ${this.props.prod.price}</h4>

        <div className='prices'>
          <label className='info'> Total </label>
          <label className='info'> Price </label>
          <label className='total-value'>${this.getTotal()}</label>
          <label className='price-value'>
            ${(+this.props.prod.price || 0).toFixed(2)}
          </label>
        </div>
        <p className='description'>{this.props.prod.description}</p>
        <div className='item-controls'>
          <QuantityPicker
            onValueChange={this.handleQuantityChange}
          ></QuantityPicker>
        </div>
        <button
          onClick={this.handleAddButton}
          className='btn btn-sm btn-light btn-add'
        >
          <i className='fa fa-cart-plus' aria-hidden='true'></i>Add To Cart
        </button>
      </div>
    )
  }

  handleAddButton = () => {
    //create copy of prod
    var copy = {
      ...this.props.prod,
      quantity: this.state.quantity
    }
    //send copy to cart
    this.context.addProdToCart(copy)
  }

  getTotal = () => {
    let total = this.props.prod.price * this.state.quantity
    return total.toFixed(2)
  }

  handleQuantityChange = quantity => {
    console.log('quantity changed', quantity)
    this.setState({ quantity: quantity })
  }
}
export default Item
