import React, { Component } from 'react'
import './navBar.css'
import Catalog from './catalog'
//imrc
//cc
class NavBar extends Component {
  state = {}
  render () {
    return (
      <div className='navbar-page'>
        <h1>Hello There! Welcome to my online game store!</h1>

        <ul>
          <a href='/#' className='nav-links'>
            Home
          </a>
          <a href='/#' className='nav-links'>
            Catalog
          </a>
          <a href='/#' className='nav-links'>
            About Us
          </a>
        </ul>
      </div>
    )
  }
}

export default NavBar
