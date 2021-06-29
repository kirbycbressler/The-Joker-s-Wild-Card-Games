var data = [
  {
    _id: '0',
    title: 'UNO',
    description: 'One man army, You know?',
    image: 'uno-1.jpg',
    price: 11.17,
    category: 'Solo artist',
    discount: 10
  },
  {
    _id: '011',
    title: 'Hand And Foot',
    description: 'Head, Shoulders Hands and feet, Hands And Feet',
    image: 'Cards.jpg',
    price: 11.15,
    category: 'Card Game',
    discount: 10
  },
  {
    _id: '012',
    title: 'Crazy 8s',
    description: 'This one is for The WILD Ones',
    image: 'cards2.png',
    price: 11.14,
    category: 'Card Game',
    discount: 10
  },
  {
    _id: '0123',
    title: 'BlackJack',
    description: 'House wins "everytime"',
    image: 'cards3.png',
    price: 11.13,
    category: 'Card Game',
    discount: 10
  },
  {
    _id: '0111',
    title: 'Go Fish',
    description: 'Dont lie, or do lie, either way, you better let the kid win.',
    image: 'cards1.png',
    price: 11.12,
    category: 'Card Game',
    discount: 10
  },
  {
    _id: '01',
    title: 'Poker',
    description: 'Poker face',
    image: 'poker-1.jpg',
    price: 11.16,
    category: 'ACT it out',
    discount: 10
  }
]

class ItemService {
  // methods to get service

  getCatalog () {
    // logic to connect to a server and retriece the list items
    // return mock data
    return data
  }
  getStock (itemId) {}
  getItemPrice (cupon) {}
}

export default ItemService
