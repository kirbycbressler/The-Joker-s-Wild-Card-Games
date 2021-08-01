import React, { Component } from 'react'
import storeContext from '../context/storeContext'

class ShoppingList extends Component {
  static contextType = storeContext

  state = {}
  render () {
    return (
      <div>
        <div>
          <input type='text' />
          <button>Add to list</button>
        </div>
      </div>
    )
  }

  handleAddToList = () => {
    this.context.addToShoppingList('the text from the input here')
  }
}

export default ShoppingList

/**
 * handle button click
 * call a funtion
 * get the text from the input field
 * connect your component to use the context store
 * call the function (addToShoppingList) on the context
 *
 * read the shoppingList [] from the context
 * map that array into div with the text inside
 *
 */
