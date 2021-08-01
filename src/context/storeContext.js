import React from 'react'

export default React.createContext({
  cart: [],
  shoppingList: [],
  addToShoppingList: text => {},
  addProdToCart: product => {}
})
