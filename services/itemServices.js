import axios from 'axios'
var data = [
  {
    _id: '0',
    title: 'UNO',
    description: 'One man army, You know?',
    image: 'uno-1.jpg',
    price: 11.17,
    category: 'Family',
    discount: 10
  },
  {
    _id: '011',
    title: 'Hand And Foot',
    description: 'Head, Shoulders Hands and feet, Hands And Feet',
    image: 'Cards.jpg',
    price: 11.15,
    category: 'Family',
    discount: 10
  },
  {
    _id: '012',
    title: 'Crazy 8s',
    description: 'This one is for The WILD Ones',
    image: 'cards2.png',
    price: 11.14,
    category: 'Kids',
    discount: 10
  },
  {
    _id: '0123',
    title: 'BlackJack',
    description: 'House wins "everytime"',
    image: 'cards3.png',
    price: 11.13,
    category: 'Friends',
    discount: 10
  },
  {
    _id: '0111',
    title: 'Go Fish',
    description: 'Dont lie, or do lie, either way, you better let the kid win.',
    image: 'cards1.png',
    price: 11.12,
    category: 'Kids',
    discount: 10
  },
  {
    _id: '01',
    title: 'Poker',
    description: 'Poker face',
    image: 'poker-1.jpg',
    price: 11.16,
    category: 'Friends',
    discount: 10
  }
]

class ItemService {
  // methods to get service

  async getCatalog () {
    // logic to connect to a server and retrieve the list items
    // URL: http://127.0.0.1:5000/api/catalog  GET
    let response = await axios.get('http://127.0.0.1:5000/api/catalog')
    return response.data

    // return mock data
    // return data
  }

  // method to save a product on the server
  // http://127.0.0.1:5000/api/catalog
  async saveItem (item) {
    let response = await axios.post('http://127.0.0.1:5000/api/catalog', item)
    // hot fix: add an id if missing
    // todo: make sure server always returns an ID
    let newItem = response.data
    if (!newItem._id) {
      newItem._id = Math.random().toString()
    }
    return newItem
  }

  async getCategories () {
    let response = await axios.get('http://127.0.0.1:5000/api/categories')
    return response.data
  }

  getStock (itemId) {}
  getItemPrice (cupon) {}
}

export default ItemService
