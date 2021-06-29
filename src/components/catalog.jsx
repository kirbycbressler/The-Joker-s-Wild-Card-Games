import React, { Component } from 'react'
import './catalog.css'
import Item from './item'
import ItemService from '../services/itemService'

class Catalog extends Component {
  state = {
    items: []
  }

  // display el on screen
  render () {
    console.log('render catalog')
    return (
      <React.Fragment>
        <h3 className='catalog-page-heading'>
          Our amazing catalog with {this.state.items.length} products
        </h3>
        <div className='catalog-page'>
          {this.state.items.map(prod => (
            <Item key={prod._id} prod={prod}></Item>
          ))}
        </div>
      </React.Fragment>
    )
  }
  // called after the render function is executed
  componentDidMount () {
    console.log('cat did mount')

    // call service to get the list of items
    var itemService = new ItemService()
    var items = itemService.getCatalog()
    this.setState({ items: items })
  }
}
export default Catalog
