import React, { Component } from 'react'
import storeContext from '../context/storeContext'
import ItemInCart from './itemInCart'
import ItemService from './../services/itemServices'
import './cart.css'

class Cart extends Component {
  static contextType = storeContext

  state = {
    couponCode: ' ',
    discount: 0
  }
  render () {
    return (
      <div className='cart-page'>
        <h1>This is the cart {this.context.cart.length}</h1>

        <div className='product-container'>
          {this.context.cart.map(prod => (
            <ItemInCart key={prod._id} prod={prod}></ItemInCart>
          ))}
        </div>
        <div className='total-container'> Total: {this.getTotal()}</div>
        <div>
          <input
            type='text'
            name='cuponCode'
            value={this.state.cuponCode}
            onChange={this.handleInputChange}
            placeholder='Discount code'
          ></input>
          <button onClick={this.validateCode} className='btn btn-sm btn-dark'>
            Validate code
          </button>
          <button onClick={this.placeOrder} className='btn btn-block btn-dark'>
            {' '}
            Save Cart{' '}
          </button>
        </div>
      </div>
    )
  }

  placeOrder = async () => {
    let order = {
      user: 'kirby',
      couponCode: this.state.couponCode,
      products: this.context.cart,
      createdOn: new Date()
    }
    console.log(order)
    let service = new ItemService()
    let placedOrder = await service.placedOrder(order)
    console.log(placedOrder)
    // api endpoint:
    // POST
    // receive the order
    // save the order in the orders collection
  }

  validateCode = async () => {
    console.log(this.state.couponCode)

    let service = new ItemService()

    let res = await service.validateCode(this.state.couponCode)
    console.log(res)
    if (res.error) {
      alert('Invalid code')
    } else {
      console.log('you got a discount for', res.discount + '%')
      // apply the discount meaning decrese the total
      this.setState({ discount: res.discount })
    }

    // create a method on the service
    // will call the new endpoint on the server

    // create an instance of the service
    // call the new method
  }

  handleInputChange = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  getTotal = () => {
    let total = 0
    for (let i = 0; i < this.context.cart.length; i++) {
      let product = this.context.cart[i]
      total += product.quantity * product.price
    }
    let discount = total * (this.state.discount / 100)

    return (total - discount).toFixed(2)
  }
}

export default Cart

/**
 * How to start the projects:
 *
 * - Start mongo service:
 * sudo service mongodb start
 *
 * - start the backend
 * source venv/bin/activate
 * ./runserver
 *
 *
 * - start the front end
 * npm start
 *
 */
