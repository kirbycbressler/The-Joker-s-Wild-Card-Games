import React, { Component } from 'react'
import Item from './item'
import './catalog.css'
import ItemService from '../services/itemServices'

class Catalog extends Component {
  state = {
    items: [],
    categories: [],
    selectedCategory: ''
  }
  // display el on screen
  render () {
    let itemsToDisplay = this.state.items
    if (this.state.selectedCategory) {
      // filter items array
      itemsToDisplay = itemsToDisplay.filter(
        item => item.category === this.state.selectedCategory
      )
    }

    return (
      <React.Fragment>
        <div className='catalog-container'>
          <h2>Our amazing catalog with {this.state.items.length} products</h2>
          <div className='filter-buttons'>
            <button
              onClick={() => this.filterItems('')}
              className='btn btn-info'
            >
              All items
            </button>
            {this.state.categories.map(cat => (
              <button
                onClick={() => this.filterItems(cat)}
                className='btn btn-info'
                key={cat}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
        <div className='catalog-page'>
          {itemsToDisplay.map(prod => (
            <Item key={prod._id} prod={prod}></Item>
          ))}
        </div>
      </React.Fragment>
    )
  }
  filterItems = category => {
    console.log('filtering', category)
    this.setState({ selectedCategory: category })
  }
  // called after the render function is executed
  async componentDidMount () {
    console.log('cat did mount')

    // call service to get the list of items
    var itemService = new ItemService()
    var items = await itemService.getCatalog()
    console.log(items)
    this.setState({ items: items })

    // identify the unique categories
    // let cats = []
    // for (let i = 0; i < items.length; i++) {
    //   let cat = items[i].category

    //   if (!cats.includes(cat)) {
    //     cats.push(cat)
    //   }
    // }

    let cats = await itemService.getCategories()
    console.log('categories from server', cats)

    this.setState({ categories: cats })
    // create solutions array, travel main array,
  }
}
export default Catalog
