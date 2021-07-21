import React, { Component } from 'react'
import './admin.css'
import ItemService from './../services/itemServices'

class Admin extends Component {
  state = {
    title: '',
    price: '',
    category: '',
    image: '',
    stock: '',
    minimum: ''
  }
  render () {
    return (
      <div className='admin-page'>
        <div className='capture-form'>
          <div className='my-control'>
            <label>Title</label>
            <input
              type='text'
              name='title'
              value={this.state.title}
              onChange={this.handleInputChange}
            />
          </div>
          <div className='my-control'>
            <label>Category</label>
            <input
              type='text'
              name='category'
              value={this.state.category}
              onChange={this.handleInputChange}
            />
          </div>
          <div className='my-control'>
            <label>Stock</label>
            <input
              type='text'
              name='stock'
              value={this.state.stock}
              onChange={this.handleInputChange}
            />
          </div>
          <div className='my-control'>
            <label>Minimum</label>
            <input
              type='text'
              name='minimum'
              value={this.state.minimum}
              onChange={this.handleInputChange}
            />
          </div>
          <div className='my-control'>
            <label>Price</label>
            <input
              type='text'
              name='price'
              value={this.state.price}
              onChange={this.handleInputChange}
            />
          </div>
        </div>

        <label> Title </label>
        <input
          type='text'
          value={this.state.title}
          onChange={this.handleInputChange}
        />
        <br />

        <label> Price $ </label>
        <input
          type='text'
          value={this.state.price}
          onChange={this.handleInputChange}
        />
        <br />
        <button onClick={this.handleSave} className='btn btn-dark'>
          Save Product
        </button>
      </div>
    )
  }

  handleInputChange = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  handleSave = async () => {
    console.log('saving product')

    let item = { ...this.state }
    item.price = item.price * 1
    item.stock = +item.stock
    item.minimum = parseInt(item.minimum)

    console.log(item)

    // send the object to the service
    let itemService = new ItemService()
    let response = await itemService.saveItem(item)
    console.log('saving response', response)
    // clear the capture form
  }
}

export default Admin
